package com.blenfSport.blenfapi.persitence.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.Detail;

public interface DetailRepository extends JpaRepository<Detail, Long>{
	
	List<Detail> findByFinalPurchase_id(Long finalPurchaseId);

}
