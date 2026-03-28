// src/pages/UserDetails.jsx  (or wherever you place it)
import React, { useEffect, useState } from 'react';
import { Avatar } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  Chip,
  Button,
  Grid,
  CircularProgress,
  Divider,
  Alert,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SecurityIcon from '@mui/icons-material/Security';

import { searchUserById } from '../api/service/userService';

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await searchUserById(id);
        setUser(response.data);
      } catch (err) {
        console.error('Failed to fetch user:', err);
        setError('Unable to load user details. The user may not exist or you lack permission.');

      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.50',
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error || !user) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          }
        >
          {error || 'User not found.'}
        </Alert>
      </Container>
    );
  }

  const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ') || 'Unnamed User';

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 6,
            px: 4,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              mx: 'auto',
              mb: 2,
              bgcolor: 'white',
              color: 'primary.main',
              fontSize: '3rem',
              border: '4px solid white',
              boxShadow: 3,
            }}
          >
            {fullName.charAt(0).toUpperCase()}
          </Avatar>

          <Typography variant="h4" fontWeight={700}>
            {fullName}
          </Typography>

          <Box sx={{ mt: 1.5 }}>
            <Chip
              label={user.enabled ? 'Active' : 'Disabled'}
              color={user.enabled ? 'success' : 'error'}
              size="medium"
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                px: 2,
              }}
            />
          </Box>
        </Box>

        <Box sx={{ p: { xs: 3, md: 5 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <DetailItem
                icon={<PersonIcon />}
                label="First Name"
                value={user.firstName || '—'}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DetailItem
                icon={<PersonIcon />}
                label="Last Name"
                value={user.lastName || '—'}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DetailItem
                icon={<EmailIcon />}
                label="Email"
                value={user.email || '—'}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DetailItem
                icon={<PhoneIcon />}
                label="Phone Number"
                value={user.phoneNumber || 'Not provided'}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <SecurityIcon sx={{ mr: 1.5, color: 'text.secondary' }} />
                <Typography variant="subtitle2" color="text.secondary">
                  Roles
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {user.roles?.length > 0 ? (
                  user.roles.map((role, index) => (
                    <Chip
                      key={index}
                      label={role}
                      color="primary"
                      variant="outlined"
                      size="medium"
                      sx={{ fontWeight: 500 }}
                    />
                  ))
                ) : (
                  <Typography variant="body2" color="text.disabled">
                    No roles assigned
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 5 }} />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              sx={{ minWidth: 120 }}
            >
              Back
            </Button>

            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => navigate(`/users/edit/${id}`)}
              color="primary"
              sx={{ minWidth: 140 }}
            >
              Edit User
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
        <Box sx={{ color: 'text.secondary', mr: 1.5 }}>{icon}</Box>
        <Typography variant="subtitle2" color="text.secondary">
          {label}
        </Typography>
      </Box>
      <Typography variant="h6" fontWeight={500}>
        {value}
      </Typography>
    </Box>
  );
}