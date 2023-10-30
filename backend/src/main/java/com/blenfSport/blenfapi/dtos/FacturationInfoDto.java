package com.blenfSport.blenfapi.dtos;

import org.springframework.format.annotation.NumberFormat;

import jakarta.validation.constraints.NotBlank;

public record FacturationInfoDto(
		@NotBlank
		String address,
		@NotBlank
		@NumberFormat(pattern = "##########")
		String phoneNumber) {

}
