package com.blenfSport.blenfapi.dtos;

import com.blenfSport.blenfapi.utils.Color;
import com.blenfSport.blenfapi.utils.Genere;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
public record ProductDto(
		@NotBlank
		String name,
		@NotNull
		Double price,
		@NotBlank
		String description,
		@NotNull
		Integer stock,
		@NotNull
		Long category_id,
		@NotNull
		Color color,
		@NotBlank
		String size,
		@NotNull
		Genere genere) {

}
