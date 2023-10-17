package com.blenfSport.blenfapi.persitence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blenfSport.blenfapi.persitence.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	

}
