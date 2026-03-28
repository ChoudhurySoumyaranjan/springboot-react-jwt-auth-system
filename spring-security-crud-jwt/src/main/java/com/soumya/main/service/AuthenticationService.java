package com.soumya.main.service;

import com.soumya.main.dto.AuthenticationResponse;
import com.soumya.main.dto.UserResponse;
import com.soumya.main.entity.User;
import com.soumya.main.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public AuthenticationResponse refreshToken(String refreshToken) {

        return jwtService.findRefreshToken(refreshToken)
                .map(token -> {

                    if (token.getExpiryDate().isBefore(Instant.now())) {
                        jwtService.deleteRefreshToken(token); // delete expired
                        throw new RuntimeException("Refresh token expired");
                    }

                    User user = token.getUser();

                    // DELETE OLD REFRESH TOKEN (rotation)
                    jwtService.deleteRefreshToken(token);

                    // GENERATE NEW REFRESH TOKEN
                    String newRefreshToken = jwtService.createRefreshToken(user);

                    // Load UserDetails
                    UserDetails userDetails = org.springframework.security.core.userdetails.User
                            .withUsername(user.getEmail())
                            .password(user.getPassword())
                            .authorities(
                                    user.getRoles()
                                            .stream()
                                            .map(role -> "ROLE_" + role.name())
                                            .toArray(String[]::new)
                            )
                            .build();

                    // Generate new access token
                    String newAccessToken =
                            jwtService.generateAccessToken(userDetails, user);

                    return AuthenticationResponse.builder()
                            .accessToken(newAccessToken)
                            .refreshToken(newRefreshToken) // NEW token here
                            .tokenType("Bearer")
                            .user(
                                    UserResponse.builder()
                                            .id(user.getId())
                                            .name(user.getFirstName() + " " + user.getLastName())
                                            .email(user.getEmail())
                                            .phoneNumber(user.getPhoneNumber())
                                            .updateAt(user.getUpdatedAt())
                                            .createAt(user.getCreatedAt())
                                            .phoneNumber(user.getPhoneNumber())
                                            .roles(user.getRoles())
                                            .build()
                            )
                            .build();
                })
                .orElseThrow(() -> new RuntimeException("Invalid refresh token"));
    }

}