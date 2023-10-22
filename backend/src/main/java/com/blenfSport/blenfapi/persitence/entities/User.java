package com.blenfSport.blenfapi.persitence.entities;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.blenfSport.blenfapi.dtos.RegisterRequestDto;
import com.blenfSport.blenfapi.utils.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "User")
@Table(name = "users")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "facturation_id", referencedColumnName = "id")
	private FacturationInfo facturation;
	private String email;
	private String password;
	private String name;
	private String lastname;
	private Boolean verifyEmail;
	private Integer age;
	private Role role;
	
	public User(RegisterRequestDto registerRequestDto, PasswordEncoder passwordEncoder) {
		this.email = registerRequestDto.email();
		this.password = passwordEncoder.encode(registerRequestDto.password());
		this.name = registerRequestDto.name();
		this.lastname = registerRequestDto.lastname();
		this.verifyEmail = false;
		this.age = registerRequestDto.age();
		this.role = Role.USER;
		
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	@Override
	public boolean isAccountNonExpired() {

		return true;
	}

	@Override
	public boolean isAccountNonLocked() {

		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {

		return true;
	}

	@Override
	public boolean isEnabled() {

		return true;
	}

	@Override
	public String getUsername() {
		return getEmail();
	}

	

}
