package com.blenfSport.blenfapi.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
		List<Detail> details = detailService.getDetailByFinalPurchase(finalPurchase_id);

		Map<Long, DetailResponseDto> finalPurchaseMap = new HashMap<>();

		for (Detail detail : details) {
			Long finalPurchaseId = detail.getFinalPurchase().getId();

			DetailResponseDto detailResponseDto = finalPurchaseMap.get(finalPurchaseId);

			if (detailResponseDto == null) {

				detailResponseDto = new DetailResponseDto(new ArrayList<>(), detail.getAmount(), new ArrayList<>());
			}

			detailResponseDto.products().add(new DetailResponseDto.ProductInfo(detail.getProduct()));
			
			if(!(detailResponseDto.finalPurchases().isEmpty())) {
				detailResponseDto.finalPurchases().add(new DetailResponseDto.FinalPurchaseInfo(detail.getFinalPurchase()));	
			}else {
			
			}
			
			
			finalPurchaseMap.put(finalPurchaseId, detailResponseDto);
		}

		List<DetailResponseDto> detailResponseDtos = new ArrayList<>(finalPurchaseMap.values());

		return ResponseEntity.ok(detailResponseDtos);
	}

	@GetMapping
	public ResponseEntity<List<Detail>> getAll() {
		return ResponseEntity.ok(detailService.getAll());
	}

}
