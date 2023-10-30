package com.blenfSport.blenfapi.dtos;

import java.util.Date;

import com.blenfSport.blenfapi.persitence.entities.FinalPurchase;
import com.blenfSport.blenfapi.utils.PaymentType;

public record FinalPurchaseResponseDto(Long id, Date date, PaymentType paymentType, Double subtotal,
		Double iva, Double total) {

	public FinalPurchaseResponseDto(FinalPurchase finalPurchase) {
		this(finalPurchase.getId(), finalPurchase.getDate(), finalPurchase.getPaymentType(),
				finalPurchase.getSubtotal(), finalPurchase.getIva(), finalPurchase.getTotal());
	}

}
