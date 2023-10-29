package com.blenfSport.blenfapi.persitence.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.PurchaseOrder;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long>{
	
	List<PurchaseOrder> findByFinalPurchase_id(Long finalPurchaseId);

}
