package com.blenfSport.blenfapi.persitence.entities;

import java.util.List;

import com.blenfSport.blenfapi.dtos.ProductDto;
import com.blenfSport.blenfapi.dtos.ProductResponseDto;
import com.blenfSport.blenfapi.utils.Color;
import com.blenfSport.blenfapi.utils.Genere;

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
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "Product")
@Table(name = "products")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Double price;
	private String description;
	private Integer stock;
	@ManyToOne
	@JoinColumn(name = "category_id", nullable = false)
	private Category category;
	@Enumerated(EnumType.STRING)
	private Color color;
	private String size;
	@Enumerated(EnumType.STRING)
	private Genere genere;
	@Column(name = "urlImg")
	private String urlImg;
	@OneToMany(mappedBy = "product")
	private List<Detail> detail;

	public Product(ProductDto productDto, Category category) {

		this.name = productDto.name();
		this.price = productDto.price();
		this.description = productDto.description();
		this.stock = productDto.stock();
		this.category = category;
		this.color = productDto.color();
		this.size = productDto.size();
		this.genere = productDto.genere();
	}

	public void UpdateProduct(@Valid ProductDto productDto, Category category) {

		this.name = productDto.name();
		this.price = productDto.price();
		this.description = productDto.description();
		this.stock = productDto.stock();
		this.category = category;
		this.color = productDto.color();
		this.size = productDto.size();
		this.genere = productDto.genere();

	}

	
}
