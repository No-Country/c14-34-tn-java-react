package com.blenfSport.blenfapi.dtos;


import jakarta.validation.constraints.NotNull;

public record ShoppingCartDto(
		@NotNull
		Long id,
		@NotNull
		Integer amount
		) {

}
