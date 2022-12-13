package com.dh.backend.config.security;

import com.dh.backend.config.security.jwt.JwtEntryPointConfig;
import com.dh.backend.config.security.jwt.JwtTokenFilterConfig;

import com.dh.backend.service.jwt.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    @Autowired
    private UserDetailServiceImpl userDetailsService;

    @Autowired
    private JwtEntryPointConfig jwtEntryPointConfig;


    @Bean
    public JwtTokenFilterConfig jwtTokenFilter() {
        return new JwtTokenFilterConfig();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean("authenticationManager")
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }


    // @Override
    @Primary
    @Bean
    protected HttpSecurity configure(HttpSecurity http) throws Exception {


        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/auth/", "/usuarios/", "productos/busqueda-por-fecha-y-ciudad", "productos/busqueda-por-fecha"
                ).permitAll()

                .antMatchers(HttpMethod.GET, "/productos/", "/categorias/"
                        , "/ciudades/", "/caracteristicas/", "/swagger-ui/"
                ).permitAll()

                .antMatchers(HttpMethod.POST, "/productos/**", "/categorias/**"
                        , "/ciudades/**","/roles/**", "/caracteristicas/**"
                ).hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.PUT, "/productos/**", "/categorias/**"
                        , "/ciudades/**", "/caracteristicas/**", "/roles/**", "/usuarios/**"
                ).hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.DELETE, "/productos/**", "/categorias/**"
                        , "/ciudades/**", "/caracteristicas/**", "/roles/**", "/usuarios/**"
                ).hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/roles/**", "/usuarios/**"
                ).hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/reservas/**"
                ).hasAnyRole("ADMIN", "CLIENT")

                .antMatchers(HttpMethod.PUT, "/reservas/**"
                ).hasAnyRole("ADMIN", "CLIENT")

                .antMatchers(HttpMethod.DELETE, "/reservas/**"
                ).hasAnyRole("ADMIN", "CLIENT")

                .antMatchers(HttpMethod.GET, "/reservas/**"
                ).hasAnyRole("ADMIN", "CLIENT")

                //.anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPointConfig)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
        return http;
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOriginPatterns(Arrays.asList("*"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowCredentials(true);
        config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        UrlBasedCorsConfigurationSource cors = new UrlBasedCorsConfigurationSource();
        cors.registerCorsConfiguration("/**", config);
        return cors;
    }

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(corsConfigurationSource()));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }
}

