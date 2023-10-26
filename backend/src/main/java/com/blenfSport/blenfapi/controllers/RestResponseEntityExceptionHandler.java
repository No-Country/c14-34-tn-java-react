package com.blenfSport.blenfapi.controllers;

import com.blenfSport.blenfapi.exceptions.BadRequestException;
import com.blenfSport.blenfapi.exceptions.ErrorResponse;
import com.blenfSport.blenfapi.exceptions.ResourceNotFoundException;
import com.blenfSport.blenfapi.exceptions.UsernameOrPasswordIncorretException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<Object> handlerBadRequest(BadRequestException ex, WebRequest request) {
        return new ResponseEntity<>(new ErrorResponse("Bad Request", ex.getMessage(), LocalDateTime.now()),
                HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handlerResourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        return new ResponseEntity<>(new ErrorResponse("Resource Not Found", ex.getMessage(), LocalDateTime.now()),
                HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<Object> handlerResourceNotFoundException(java.lang.NullPointerException ex, WebRequest request) {
        return new ResponseEntity<>(new ErrorResponse("Resource Not Found", ex.getMessage(), LocalDateTime.now()),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @ExceptionHandler(UsernameOrPasswordIncorretException.class)
    public ResponseEntity<Object> handlerUsernameOrPasswordIncorretException(UsernameOrPasswordIncorretException ex, WebRequest request){
    	return new ResponseEntity<>(new ErrorResponse("User or password incorret", ex.getMessage(), LocalDateTime.now()),
    			HttpStatus.FORBIDDEN);
    }

}
