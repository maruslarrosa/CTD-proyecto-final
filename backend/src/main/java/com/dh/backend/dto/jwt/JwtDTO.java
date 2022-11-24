package com.dh.backend.dto.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtDTO {

    private String token;
    private String bearer;
    private String username;
    private Collection<? extends GrantedAuthority> authorities;

}
