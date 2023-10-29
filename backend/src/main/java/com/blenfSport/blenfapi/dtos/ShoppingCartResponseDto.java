package com.blenfSport.blenfapi.dtos;




import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.persitence.entities.ShoppingCart;
import com.blenfSport.blenfapi.persitence.entities.User;

public record ShoppingCartResponseDto(Long id, Product product, User user, Integer amount) {

	public ShoppingCartResponseDto(ShoppingCart shoppingCart) {
		this(shoppingCart.getId(), shoppingCart.getProduct(), shoppingCart.getUser(), shoppingCart.getAmount());
	}

	



}
