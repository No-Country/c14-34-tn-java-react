package com.blenfSport.blenfapi.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.blenfSport.blenfapi.dtos.FinalPurchaseResponseDto;
import com.blenfSport.blenfapi.dtos.PaymentTypeDto;
import com.blenfSport.blenfapi.persitence.entities.FinalPurchase;
import com.blenfSport.blenfapi.services.FinalPurchaseService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/FinalPurchase")
@RequiredArgsConstructor
public class FinalPurchaseController {

	private final FinalPurchaseService finalPurchaseService;

	@GetMapping(value = "user")
	public ResponseEntity<List<FinalPurchaseResponseDto>> getByUser() {
		String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.ok(finalPurchaseService.getFinalPurchaseByUser(email).stream()
				.map(FinalPurchaseResponseDto::new).toList());
	}
	@PostMapping(value = "buy")
	public ResponseEntity<String> createFinalPurchase(@RequestBody PaymentTypeDto paymentType,
			UriComponentsBuilder builder) {
		String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		FinalPurchase finalPurchase = finalPurchaseService.createFinalPurchase(email, paymentType);
		URI url = builder.path("/shoppingCart/{id}").buildAndExpand(finalPurchase.getId()).toUri();
		return ResponseEntity.created(url).body("Compra finalizada con exito");
	}

}
