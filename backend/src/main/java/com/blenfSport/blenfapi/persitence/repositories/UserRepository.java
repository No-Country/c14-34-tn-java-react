package com.blenfSport.blenfapi.persitence.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.blenfSport.blenfapi.persitence.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<UserDetails> findByEmail(String email);

	boolean existsByEmail(String email);
	

}
