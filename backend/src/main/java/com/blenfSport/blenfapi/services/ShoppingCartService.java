package com.blenfSport.blenfapi.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blenfSport.blenfapi.dtos.ShoppingCartDto;
import com.blenfSport.blenfapi.exceptions.ResourceNotFoundException;
import com.blenfSport.blenfapi.persitence.entities.ShoppingCart;
import com.blenfSport.blenfapi.persitence.repositories.ShoppingCartRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ShoppingCartService {
	
	private final ShoppingCartRepository shoppingCartRepository;
	
	public List<ShoppingCart> getListByUser(String UserEmail){
		return this.shoppingCartRepository.findByUser_Email(UserEmail);
	}
	
	public void cleanShoppingCart(Long UserId) {
		
		shoppingCartRepository.deleteByUser_Id(UserId);
	}
	
	public void removeProduct(Long id) {
		
		shoppingCartRepository.deleteById(id);
	}
	
	public ShoppingCart addProduct(@Valid ShoppingCartDto shoppingCartDto) {
		return shoppingCartRepository.save(new ShoppingCart(shoppingCartDto));
	}
	
	public Long getCountByUser(Long userId) {
		return this.shoppingCartRepository.countByUser_id(userId);
	}

	public ShoppingCart getById(Long id) {
		Optional<ShoppingCart> shoppingCart = shoppingCartRepository.findById(id); 
		if(shoppingCart.isPresent()) {
			return shoppingCart.get();
		}else {
			throw new ResourceNotFoundException("Este item no existe");
		}
	}
	
	
	
	
	
}
