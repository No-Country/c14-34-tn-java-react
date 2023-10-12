package com.blenfSport.blenfapi.controllers;

import java.net.URI;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.blenfSport.blenfapi.dtos.ProductDto;
import com.blenfSport.blenfapi.dtos.ProductResponseDto;
import com.blenfSport.blenfapi.persitence.entities.Category;
import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.services.CategoryService;
import com.blenfSport.blenfapi.services.ProductService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

	private final ProductService productService;
	private final CategoryService categoryService;

	@PostMapping(value = "saveProducts")
	public ResponseEntity<ProductResponseDto> SaveProduct(@RequestBody @Valid ProductDto productDto,
			UriComponentsBuilder builder) {
		Category category = categoryService.findCategoryById(productDto.category_id());
		Product product = productService.saveProduct(productDto, category);
		ProductResponseDto responseDto = new ProductResponseDto(product);
		URI url = builder.path("/producto/{id}").buildAndExpand(product.getId()).toUri();
		return ResponseEntity.created(url).body(responseDto);

	}
	@GetMapping(value = "showProducts")
	public ResponseEntity<Page<ProductResponseDto>> ShowAllProducts(Pageable pageable){
		return ResponseEntity.ok(productService.getAllProducts(pageable).map(ProductResponseDto::new));
		
	}
	
}
