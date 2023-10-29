package com.blenfSport.blenfapi.dtos;

import com.blenfSport.blenfapi.persitence.entities.Detail;
import com.blenfSport.blenfapi.persitence.entities.FinalPurchase;
import com.blenfSport.blenfapi.persitence.entities.Product;

public record DetailResponseDto(Long id, Product product, Integer amount, FinalPurchase finalPurchase) {

	public DetailResponseDto (Detail detail) {
		this(detail.getId(),detail.getProduct(),detail.getAmount(),detail.getFinalPurchase());
	}
}
