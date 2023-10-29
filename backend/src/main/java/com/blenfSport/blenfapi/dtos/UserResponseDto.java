package com.blenfSport.blenfapi.dtos;

import org.springframework.security.core.userdetails.UserDetails;

import com.blenfSport.blenfapi.persitence.entities.FacturationInfo;
import com.blenfSport.blenfapi.persitence.entities.User;
import com.blenfSport.blenfapi.utils.Role;

public record UserResponseDto(Long id, FacturationInfo facturation, String email, String name, String lastname,
		Integer age, Role role) {

	public UserResponseDto(User user) {
		this(user.getId(), user.getFacturation(), user.getEmail(), user.getName(), user.getLastname(), user.getAge(),
				user.getRole());
	}

	

}
