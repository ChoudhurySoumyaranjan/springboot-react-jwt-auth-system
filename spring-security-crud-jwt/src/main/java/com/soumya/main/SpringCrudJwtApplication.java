package com.soumya.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class SpringCrudJwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringCrudJwtApplication.class, args);
	}

}
