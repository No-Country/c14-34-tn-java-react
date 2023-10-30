package com.blenfSport.blenfapi.persitence.entities;

import java.util.Date;
import java.util.List;


import com.blenfSport.blenfapi.utils.PaymentType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "FinalPurchase")
@Table(name = "finalPurchases")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class FinalPurchase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	@JsonIgnore
	private User user;
	private Date date;
	@Enumerated(EnumType.STRING)
	@Column(name = "paymentType")
	private PaymentType paymentType;
	private Double subtotal;
	private Double iva;
	private Double total;
	
	public FinalPurchase(Double subTotal, Date date, User user) {
		this.date = date;
		this.user = user;
		this.subtotal = subTotal;
		this.iva = subTotal * 0.12;
		this.total = this.subtotal + this.iva;
		
	}



}
