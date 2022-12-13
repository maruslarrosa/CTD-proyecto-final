package com.dh.backend.service.jwt;

import com.dh.backend.dto.jwt.UserDTO;
import com.dh.backend.model.jwt.User;
import com.dh.backend.repository.jwt.IUserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;

    @Autowired
    private static final Logger logger = Logger.getLogger(UserService.class);


    public UserDTO findByEmail(String email) {
        return mapper.convertValue(userRepository.findByEmail(email), UserDTO.class);
    }

    public Set<UserDTO> findAll() {
        List<User> users = userRepository.findAll();
        Set<UserDTO> usersDTO = new HashSet<>();
        for (User user : users) {
            usersDTO.add(mapper.convertValue(user, UserDTO.class));
        }
        return usersDTO;
    }

    public UserDTO findById(Long id) {
        return mapper.convertValue(userRepository.findById(id), UserDTO.class);
    }

    public UserDTO save(UserDTO user) {
        return mapper.convertValue(userRepository.save(mapper.convertValue(user, User.class)), UserDTO.class);
    }

    public UserDTO update(UserDTO user, Long id) {
        User userUpdated = userRepository.findById(id).orElse(null);
        if (userUpdated == null) {
            // error
        }
        User userNewData = mapper.convertValue(user, User.class);
        userUpdated.setName(userNewData.getName());
        userUpdated.setLastName(userNewData.getLastName());
        userUpdated.setEmail(userNewData.getEmail());
        userUpdated.setPassword(userNewData.getPassword());
        userUpdated.setRole(userNewData.getRole());
        return mapper.convertValue(userRepository.save(userUpdated), UserDTO.class);
    }

    public UserDTO delete(Long id) {
        UserDTO userDeleted = mapper.convertValue(userRepository.findById(id), UserDTO.class);
        userRepository.delete(mapper.convertValue(userDeleted, User.class));
        return userDeleted;
    }
}
