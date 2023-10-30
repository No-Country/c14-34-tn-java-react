package com.blenfSport.blenfapi.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import org.springframework.validation.FieldError;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {

    private String message;
    private String detail;
    private LocalDateTime timestamp;
    
    
    public ErrorResponse(FieldError error) {
    	this(error.getField(), error.getDefaultMessage(), LocalDateTime.now());
    }
}
