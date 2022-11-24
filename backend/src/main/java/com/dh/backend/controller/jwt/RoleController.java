package com.dh.backend.controller.jwt;

import com.dh.backend.dto.jwt.RoleDTO;
import com.dh.backend.service.jwt.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    //    ADMIN
    @GetMapping
    public ResponseEntity<Map<String, Object>> index() {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", roleService.findAll());
        return ResponseEntity.ok(response);
    }

    //    ADMIN
    @PostMapping
    public ResponseEntity<Map<String, Object>> create(@RequestBody RoleDTO role) {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", roleService.save(role));
        return ResponseEntity.ok(response);
    }

    //    ADMIN
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@RequestBody RoleDTO role, @PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", roleService.update(role, id));
        return ResponseEntity.ok(response);
    }

    //    ADMIN
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> findById(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", roleService.findById(id));
        return ResponseEntity.ok(response);
    }

    //    ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", roleService.delete(id));
        return ResponseEntity.ok(response);
    }
}
