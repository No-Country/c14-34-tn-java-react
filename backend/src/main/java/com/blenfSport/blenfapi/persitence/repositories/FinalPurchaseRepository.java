package com.blenfSport.blenfapi.persitence.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.FinalPurchase;

public interface FinalPurchaseRepository extends JpaRepository<FinalPurchase, Long> {
	List<FinalPurchase> findByUser_Email(String userEmail);
}
