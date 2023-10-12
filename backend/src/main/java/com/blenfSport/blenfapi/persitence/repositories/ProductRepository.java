package com.blenfSport.blenfapi.persitence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
