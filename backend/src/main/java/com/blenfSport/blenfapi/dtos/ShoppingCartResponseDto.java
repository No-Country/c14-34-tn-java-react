package com.blenfSport.blenfapi.dtos;

import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.persitence.entities.ShoppingCart;


public record ShoppingCartResponseDto(Long id, Product product, Integer amount) {

	public ShoppingCartResponseDto(ShoppingCart shoppingCart) {
		this(shoppingCart.getId(), shoppingCart.getProduct(), shoppingCart.getAmount());
	}

	



}
