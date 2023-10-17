package com.blenfSport.blenfapi.dtos;

import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.utils.Color;
import com.blenfSport.blenfapi.utils.Genere;

public record ProductResponseDto(Long id , String name, Double price, String description, Integer stock, Long category,
		Color color, String size, Genere genere) {

	public ProductResponseDto(Product product) {
		this(product.getId() , product.getName(), product.getPrice(), product.getDescription(), 
				product.getStock(), product.getCategory().getId(),
				product.getColor(), product.getSize(), product.getGenere());
	}

}
