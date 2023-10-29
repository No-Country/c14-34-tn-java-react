package com.blenfSport.blenfapi.dtos;

import java.util.Date;

import com.blenfSport.blenfapi.persitence.entities.FinalPurchase;
import com.blenfSport.blenfapi.persitence.entities.User;
import com.blenfSport.blenfapi.utils.PaymentType;

public record FinalPurchaseResponseDto(Long id, User user, Date date, PaymentType paymentType, Double subtotal,
		Double iva, Double total) {

	public FinalPurchaseResponseDto(FinalPurchase finalPurchase) {
		this(finalPurchase.getId(), finalPurchase.getUser(), finalPurchase.getDate(), finalPurchase.getPaymentType(),
				finalPurchase.getSubtotal(), finalPurchase.getIva(), finalPurchase.getTotal());
	}

}
