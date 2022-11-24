package com.dh.backend.config.app;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class AppResourceConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().csrfTokenRepository(new CookieCsrfTokenRepository())
                .requireCsrfProtectionMatcher(
                        httpServletRequest->httpServletRequest.getMethod().equals("None")
                );
        return http.build();
    }
}
