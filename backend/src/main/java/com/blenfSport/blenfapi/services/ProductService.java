package com.blenfSport.blenfapi.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.blenfSport.blenfapi.dtos.ProductDto;
import com.blenfSport.blenfapi.persitence.entities.Category;
import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.persitence.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

	private final ProductRepository productRepository;

	public Product saveProduct(ProductDto productDto, Category category) {
		return productRepository.save(new Product(productDto, category));

	}

	public Page<Product> getAllProducts(Pageable pageable) {
		return productRepository.findAll(pageable);
	}

}
