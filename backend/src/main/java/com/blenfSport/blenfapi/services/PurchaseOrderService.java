package com.blenfSport.blenfapi.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blenfSport.blenfapi.persitence.entities.PurchaseOrder;
import com.blenfSport.blenfapi.persitence.repositories.PurchaseOrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class PurchaseOrderService {
	
	private final PurchaseOrderRepository purchaseOrderRepository;
	
	public void createPurchaseOrder(PurchaseOrder purchaseOrder) {
		purchaseOrderRepository.save(purchaseOrder);
	}
	
	public List<PurchaseOrder> getPurchaseOrderByFinalPurchase(Long finalPurchaseId){
		return purchaseOrderRepository.findByFinalPurchase_id(finalPurchaseId);
	}
	
	
}
