package com.dh.backend.service.jwt;

import com.dh.backend.dto.jwt.RoleDTO;
import com.dh.backend.model.jwt.Role;
import com.dh.backend.repository.jwt.IRoleRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class RoleService {

    @Autowired
    private IRoleRepository roleRepository;

    @Autowired
    private static final Logger logger = Logger.getLogger(RoleService.class);

    @Autowired
    ObjectMapper mapper;


    public Set<RoleDTO> findAll() {
        List<Role> roles = roleRepository.findAll();
        Set<RoleDTO> rolesDTO = new HashSet<>();
        for (Role role : roles) {
            rolesDTO.add(mapper.convertValue(role, RoleDTO.class));
        }
        return rolesDTO;
    }


    public RoleDTO findById(Long id) {
        return mapper.convertValue(roleRepository.findById(id), RoleDTO.class);
    }


    public RoleDTO save(RoleDTO role) {
        return mapper.convertValue(roleRepository.save(mapper.convertValue(role, Role.class)), RoleDTO.class);
    }


    public RoleDTO update(RoleDTO role, Long id) {
        Role roleUpdated = roleRepository.findById(id).orElse(null);
        if (roleUpdated == null) {
            // error
        }
        roleUpdated.setName(role.getName());

        return mapper.convertValue(roleRepository.save(roleUpdated), RoleDTO.class);
    }


    public RoleDTO delete(Long id) {
        RoleDTO roleDeleted = mapper.convertValue(roleRepository.findById(id), RoleDTO.class);
        roleRepository.delete(mapper.convertValue(roleDeleted, Role.class));
        return roleDeleted;
    }

}
