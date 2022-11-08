package com.dh.backend.service;

import com.dh.backend.dto.ImageDTO;
import com.dh.backend.model.Image;
import com.dh.backend.repository.IImageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ImageService {
    @Autowired
    private IImageRepository imageRepository;

    @Autowired
    ObjectMapper mapper;


    /**
     * Métodos CRUD completos + Método listar
     */

    /**
     * Buscar por id
     * @param id
     * @return Retorna el DTO que corresponde a ese ID
     */
    public ImageDTO readImage(Long id) {
        if (imageRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la imagen con el id: " + id);

        Optional<Image> image = imageRepository.findById(id);
        return mapper.convertValue(image, ImageDTO.class);
    }

    /**
     * Modificar
     * @param imageDTO
     * @return Graba cambios en BBDD y retorna el DTO
     */
    public ImageDTO updateImage(ImageDTO imageDTO) {
        Image image = mapper.convertValue(imageDTO, Image.class);
        if (imageRepository.findById(image.getId()).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la imágen que quieres modificar");

        return mapper.convertValue(imageRepository.save(image), ImageDTO.class);
    }

    /**
     * Eliminar
     * @param id Elimina según id
     */
    public void deleteImage(Long id) {
        if (imageRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la imágen con el id: " + id);

        imageRepository.deleteById(id);
    }

    /**
     * Listar
     * @return Retorna listado completo de entidades
     */
    public Set<ImageDTO> getListImage() {
        List<Image> categories = imageRepository.findAll();
        Set<ImageDTO> categoriesDTO = new HashSet<>();
        for (Image image: categories) {
            categoriesDTO.add(mapper.convertValue(image, ImageDTO.class));
        }

        return categoriesDTO;
    }

}
