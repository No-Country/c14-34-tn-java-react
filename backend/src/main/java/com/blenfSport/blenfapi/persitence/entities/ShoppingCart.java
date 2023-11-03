package com.blenfSport.blenfapi.persitence.entities;

import com.blenfSport.blenfapi.dtos.ShoppingCartDto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class ShoppingCart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne(optional = false,cascade = CascadeType.DETACH,fetch = FetchType.EAGER)
	private Product product;
	@ManyToOne(optional = false,cascade = CascadeType.DETACH,fetch = FetchType.EAGER)
	private User user;
	private Integer amount;
	
	public ShoppingCart(ShoppingCartDto shoppingCartDto, User user,Product product) {
		this.product = product;
		this.user = user;
		this.amount = shoppingCartDto.amount();
	}

}
