package com.dh.backend.config.security.jwt;

import com.dh.backend.model.jwt.MainUserAuth;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtProviderConfig {

    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.expiration}")
    private int expiration;

    public String generateToken(Authentication auth) {
        MainUserAuth mainUserAuth = (MainUserAuth) auth.getPrincipal();
        Map<String, Object> claims = new HashMap<>();

        claims.put("lastName",mainUserAuth.getLastName());
        claims.put("name",mainUserAuth.getName());
        return Jwts.builder()
                .setSubject(mainUserAuth.getUsername())
                .addClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 1000))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    public String getUserNameFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    @SneakyThrows
    public boolean validateToken(String token) {
        Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
        return true;
    }
}

