package com.blenfSport.blenfapi.services;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blenfSport.blenfapi.dtos.DetailResponseDto;
import com.blenfSport.blenfapi.exceptions.ResourceNotFoundException;
import com.blenfSport.blenfapi.persitence.entities.Detail;
import com.blenfSport.blenfapi.persitence.repositories.DetailRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class DetailService {

	private final DetailRepository detailRepository;

	public void createDetail(Detail detail) {
		detailRepository.save(detail);
	}

	public List<DetailResponseDto> getDetailByFinalPurchase(Long finalPurchaseId) {
		if (!detailRepository.existsByFinalPurchase_id(finalPurchaseId)) {
			throw new ResourceNotFoundException("Esta compra no existe");
		}
		List<Detail> details = detailRepository.findByFinalPurchase_Id(finalPurchaseId);
		return details.stream().map(DetailResponseDto::new).toList(); 
	}

	public List<Detail> getAll() {
		return detailRepository.findAll();
	}

}
