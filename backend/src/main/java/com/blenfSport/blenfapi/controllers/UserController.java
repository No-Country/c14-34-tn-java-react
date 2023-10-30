package com.blenfSport.blenfapi.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blenfSport.blenfapi.dtos.FacturationInfoDto;
import com.blenfSport.blenfapi.dtos.UserResponseDto;
import com.blenfSport.blenfapi.persitence.entities.FacturationInfo;
import com.blenfSport.blenfapi.persitence.entities.User;
import com.blenfSport.blenfapi.services.AuthService;
import com.blenfSport.blenfapi.services.UserService;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;
	private final AuthService authService;

	@PutMapping(value ="updateFacturationInfo")
	@Transactional
	public ResponseEntity<UserResponseDto> updateUserInfo(@Valid @RequestBody FacturationInfoDto facturationInfoDto) {
		FacturationInfo facturationInfo = userService.SaveFacturationInfo(facturationInfoDto);

		String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		User user = (User) authService.getByEmail(email).get();

		user.setFacturation(facturationInfo);

		return ResponseEntity.ok(new UserResponseDto(user));

	}
}
