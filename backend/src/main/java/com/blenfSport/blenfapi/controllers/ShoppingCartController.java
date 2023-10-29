package com.blenfSport.blenfapi.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.blenfSport.blenfapi.dtos.ShoppingCartDto;
import com.blenfSport.blenfapi.dtos.ShoppingCartResponseDto;
import com.blenfSport.blenfapi.persitence.entities.ShoppingCart;
import com.blenfSport.blenfapi.services.ShoppingCartService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/shoppingList")
@RequiredArgsConstructor
public class ShoppingCartController {
	
	private final ShoppingCartService shoppingCartService;
	
	
	@GetMapping
	public ResponseEntity<List<ShoppingCartResponseDto>> getListByUser(){
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email = userDetails.getUsername();
		return ResponseEntity.ok(shoppingCartService.getListByUser(email).stream().map(ShoppingCartResponseDto::new).toList());
	}
	
	@GetMapping(value = "count/{user_id}")
	public ResponseEntity<Long> countByUser(@PathVariable Long user_id){
		return ResponseEntity.ok(shoppingCartService.getCountByUser(user_id));	
		
	}
	@PostMapping
	public ResponseEntity<String> addProduct(@RequestBody @Valid ShoppingCartDto shoppingCartDto, UriComponentsBuilder builder){
		ShoppingCart shoppingCart =  shoppingCartService.addProduct(shoppingCartDto);
		URI url = builder.path("/shoppingCart/{id}").buildAndExpand(shoppingCart.getId()).toUri();
		return ResponseEntity.created(url).body("Producto añadido correctamente");
	}
	
	@DeleteMapping(value = "clean/{item_id}")
	public ResponseEntity<String> removeProduct(@PathVariable Long item_id){
		this.shoppingCartService.removeProduct(item_id);
		return ResponseEntity.ok("Eliminado");
	}

}
