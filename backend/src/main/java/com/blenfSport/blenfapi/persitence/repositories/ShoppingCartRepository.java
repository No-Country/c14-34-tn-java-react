package com.blenfSport.blenfapi.persitence.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.ShoppingCart;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
	List<ShoppingCart> findByUser_Id(Long userId);
	List<ShoppingCart> findByUser_Email(String userEmail);
	void deleteByUser_Id(Long UserId);
	Long countByUser_id(Long UserId);
}
