package com.blenfSport.blenfapi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.blenfSport.blenfapi.dtos.DetailResponseDto;
import com.blenfSport.blenfapi.persitence.entities.Detail;
import com.blenfSport.blenfapi.services.DetailService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/FinalPurchaseDetail")
@RequiredArgsConstructor
public class DetailController {

	private final DetailService detailService;

	@GetMapping("/{finalPurchase_id}")
	public ResponseEntity<List<DetailResponseDto>> getDetailsByFinalPurchase(@PathVariable Long finalPurchase_id) {

		List<DetailResponseDto> detailResponseDto = detailService.getDetailByFinalPurchase(finalPurchase_id);

		return ResponseEntity.ok(detailResponseDto);

	}

	@GetMapping
	public ResponseEntity<List<Detail>> getAll() {
		return ResponseEntity.ok(detailService.getAll());
	}

}
