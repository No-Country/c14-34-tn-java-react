package com.blenfSport.blenfapi.services;



import org.springframework.stereotype.Service;

import com.blenfSport.blenfapi.persitence.entities.Category;
import com.blenfSport.blenfapi.persitence.repositories.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {

	private final CategoryRepository categoryRepository;
	
	public Category findCategoryById(Long id) {
		return categoryRepository.getReferenceById(id);
	}
	
	public Category FindCategoryIdByname(String name) {
		return categoryRepository.findIdByName(name);
	}
	
}
