package com.blenfSport.blenfapi.services;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.blenfSport.blenfapi.dtos.AuthResponseDto;
import com.blenfSport.blenfapi.dtos.LoginRequestDto;
import com.blenfSport.blenfapi.dtos.RegisterRequestDto;
import com.blenfSport.blenfapi.exceptions.UserAlreadyExistException;
import com.blenfSport.blenfapi.exceptions.UsernameOrPasswordIncorretException;
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

		Optional<UserDetails> userOptional = userRepository.findByEmail(loginRequestDto.email());
		if (userOptional.isPresent()) {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDto.email(), loginRequestDto.password()));
			UserDetails user = userOptional.get();
			String token = jwtService.getToken(user);
			return new AuthResponseDto(token);
		} else {
			throw new UsernameOrPasswordIncorretException("Usuario o contraseña incorrecto");
		}

	}

	public AuthResponseDto register(@Valid RegisterRequestDto registerRequestDto) {
		
		User user = new User(registerRequestDto, passwordEncoder);
		if(userRepository.existsByEmail(user.getEmail())) {
			throw new UserAlreadyExistException("Este email ya se encuentra registrado");
		}
		userRepository.save(user);

		return new AuthResponseDto(jwtService.getToken(user));
	}

	public Optional<UserDetails> getByEmail(String email) {
		return userRepository.findByEmail(email);
	}

}
