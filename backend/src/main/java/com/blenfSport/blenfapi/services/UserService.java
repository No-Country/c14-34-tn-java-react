package com.blenfSport.blenfapi.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blenfSport.blenfapi.dtos.FacturationInfoDto;
import com.blenfSport.blenfapi.persitence.entities.FacturationInfo;
import com.blenfSport.blenfapi.persitence.repositories.FacturationInfoRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
	
	
	private final FacturationInfoRepository facturationInfoRepository;
	
	
	public FacturationInfo SaveFacturationInfo(FacturationInfoDto facturationInfoDto) {
		FacturationInfo facturationInfo = new FacturationInfo(facturationInfoDto);
		return facturationInfoRepository.save(facturationInfo);
		
	}
	
}
