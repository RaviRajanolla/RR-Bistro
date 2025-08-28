package com.rr_bistro.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	  @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http
	            .csrf().disable()
	            .authorizeHttpRequests(auth -> auth
	                .requestMatchers("/api/menu/**").permitAll()  // ⬅️ Allow all menu APIs
	                .anyRequest().permitAll()  // ⬅️ Allow everything during dev (optional)
	            )
	            .httpBasic().disable(); // ⬅️ Disable default basic auth

	        return http.build();
	    }

}
