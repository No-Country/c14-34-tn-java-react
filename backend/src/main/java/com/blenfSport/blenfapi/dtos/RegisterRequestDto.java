package com.blenfSport.blenfapi.dtos;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
public record RegisterRequestDto(
		@Email
		@NotBlank
		String email,
		@NotBlank
		//@Pattern(regexp = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(.{6,})$")
		String password,
		@NotBlank
		String name,
		@NotBlank
		String lastname,
		@NotNull
		@Positive
		@Digits(fraction = 0, integer = 3)
		Integer age) {

}
