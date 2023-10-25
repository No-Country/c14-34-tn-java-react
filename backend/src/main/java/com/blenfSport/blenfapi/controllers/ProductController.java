package com.blenfSport.blenfapi.controllers;

import java.net.URI;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import com.blenfSport.blenfapi.dtos.ProductDto;
import com.blenfSport.blenfapi.dtos.ProductResponseDto;
import com.blenfSport.blenfapi.persitence.entities.Category;
import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.services.CategoryService;
import com.blenfSport.blenfapi.services.ProductService;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

	private final ProductService productService;
	private final CategoryService categoryService;

	@PostMapping(value = "save")
	public ResponseEntity<ProductResponseDto> saveProduct(@RequestBody @Valid ProductDto productDto,
			UriComponentsBuilder builder) {
		Category category = categoryService.findCategoryById(productDto.category_id());
		Product product = productService.saveProduct(productDto, category);
		ProductResponseDto responseDto = new ProductResponseDto(product);
		URI url = builder.path("/producto/{id}").buildAndExpand(product.getId()).toUri();
		return ResponseEntity.created(url).body(responseDto);

	}

	@GetMapping(value = "show")
	public ResponseEntity<Page<ProductResponseDto>> showAllProducts(@PageableDefault(size = 10) Pageable pageable) {
		return ResponseEntity.ok(productService.getAllProducts(pageable).map(ProductResponseDto::new));

	}

	@GetMapping("/{name}")
	public ResponseEntity<Page<ProductResponseDto>> showAllProductsByCategory(Pageable pageable,
			@PathVariable String name) {

		Category categoryId = categoryService.FindCategoryIdByname(name);
		return ResponseEntity
				.ok(productService.FindProductsByCategory(pageable, categoryId.getId()).map(ProductResponseDto::new));

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
		productService.deleteProduct(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<ProductResponseDto> updateProduct(@RequestBody @Valid ProductDto productDto, @PathVariable Long id) {
		Category category = categoryService.findCategoryById(productDto.category_id());
		Optional<Product> productOptional = productService.FindProductById(id);
		Product product = productOptional.get();

		product.UpdateProduct(productDto, category);

		return ResponseEntity.ok(new ProductResponseDto(product));
	}
}
