package com.blenfSport.blenfapi.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blenfSport.blenfapi.dtos.AuthResponseDto;
import com.blenfSport.blenfapi.dtos.LoginRequestDto;
import com.blenfSport.blenfapi.dtos.RegisterRequestDto;
import com.blenfSport.blenfapi.services.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	
	private final AuthService authService;
	
	@PostMapping(value = "login")
	public ResponseEntity<AuthResponseDto> login(@RequestBody LoginRequestDto loginRequestDto) {
		
		return ResponseEntity.ok(authService.login(loginRequestDto));
		
	}
	
	@PostMapping(value ="register")
	public ResponseEntity<AuthResponseDto> register(@RequestBody @Valid RegisterRequestDto registerRequestDto) {
		return ResponseEntity.ok(authService.register(registerRequestDto));
		
	}

}
