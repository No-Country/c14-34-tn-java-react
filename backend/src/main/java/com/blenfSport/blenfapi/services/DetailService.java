package com.blenfSport.blenfapi.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blenfSport.blenfapi.persitence.entities.Detail;
import com.blenfSport.blenfapi.persitence.repositories.DetailRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class DetailService {
	
	private final DetailRepository detailRepository;
	
	public void createPurchaseOrder(Detail detail) {
		detailRepository.save(detail);
	}
	
	public List<Detail> getPurchaseOrderByFinalPurchase(Long finalPurchaseId){
		return detailRepository.findByFinalPurchase_id(finalPurchaseId);
	}
	
	
}
