package com.blenfSport.blenfapi.dtos;

import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.persitence.entities.User;

import jakarta.validation.constraints.NotNull;

public record ShoppingCartDto(
		@NotNull
		Product product,
		@NotNull
		User user,
		@NotNull
		Integer amount
		) {

}
