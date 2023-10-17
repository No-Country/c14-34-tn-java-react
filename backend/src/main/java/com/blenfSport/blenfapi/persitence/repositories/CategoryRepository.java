package com.blenfSport.blenfapi.persitence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

	Category findIdByName(String name);

}
