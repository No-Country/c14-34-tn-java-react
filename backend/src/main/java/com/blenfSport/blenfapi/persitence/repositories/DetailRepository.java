package com.blenfSport.blenfapi.persitence.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.Detail;

public interface DetailRepository extends JpaRepository<Detail, Long>{
	
	boolean existsByFinalPurchase_id(Long finalPurchase_id);

	List<Detail> findByFinalPurchase_Id(Long finalPurchase_Id);

}
