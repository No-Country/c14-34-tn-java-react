package com.blenfSport.blenfapi.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.blenfSport.blenfapi.dtos.AuthResponseDto;
import com.blenfSport.blenfapi.dtos.LoginRequestDto;
import com.blenfSport.blenfapi.dtos.RegisterRequestDto;
import com.blenfSport.blenfapi.persitence.entities.User;
import com.blenfSport.blenfapi.persitence.repositories.UserRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
	
	private final UserRepository userRepository;
	private final JwtService jwtService;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManager authenticationManager;

	public AuthResponseDto login(LoginRequestDto loginRequestDto) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDto.email(), loginRequestDto.password()));
		UserDetails user = userRepository.findByEmail(loginRequestDto.email()).orElseThrow();
		String token = 	jwtService.getToken(user);
		return new AuthResponseDto(token);
	}

	public AuthResponseDto register(@Valid RegisterRequestDto registerRequestDto) {
		User user = new User(registerRequestDto, passwordEncoder);
		userRepository.save(user);
		
		return new AuthResponseDto(jwtService.getToken(user));
	}

}
