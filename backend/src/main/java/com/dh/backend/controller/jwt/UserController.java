package com.dh.backend.controller.jwt;

import com.dh.backend.dto.jwt.UserDTO;
import com.dh.backend.service.jwt.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ADMIN
    @GetMapping
    public ResponseEntity<Map<String, Object>> index() {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", userService.findAll());
        return ResponseEntity.ok(response);
    }

    // ALL
    @PostMapping
    public ResponseEntity<Map<String, Object>> create(@RequestBody UserDTO userDTO) {
        Map<String, Object> response = new HashMap<>();
        String passWEncrypt = passwordEncoder.encode(userDTO.getPassword());
        userDTO.setPassword(passWEncrypt);
        response.put("respuesta", userService.save(userDTO));
        return ResponseEntity.ok(response);
    }

    // ADMIN
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@RequestBody UserDTO user, @PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        String passWEncrypt = passwordEncoder.encode(user.getPassword());
        user.setPassword(passWEncrypt);
        response.put("respuesta", userService.update(user, id));
        return ResponseEntity.ok(response);
    }

    // ADMIN
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> findById(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", userService.findById(id));
        return ResponseEntity.ok(response);
    }


    // ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", userService.delete(id));
        return ResponseEntity.ok(response);
    }


}

