package com.rr_bistro.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	  @ExceptionHandler(ResourceNotFoundException.class)
	    public ResponseEntity<?> handleResourceNotFound(ResourceNotFoundException ex) {
	        Map<String, Object> body = new HashMap<>();
	        body.put("timestamp", LocalDateTime.now());
	        body.put("status", HttpStatus.NOT_FOUND.value());
	        body.put("error", "Resource Not Found");
	        body.put("message", ex.getMessage());
	        return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
	    }

	    @ExceptionHandler(BadRequestException.class)
	    public ResponseEntity<?> handleBadRequest(BadRequestException ex) {
	        Map<String, Object> body = new HashMap<>();
	        body.put("timestamp", LocalDateTime.now());
	        body.put("status", HttpStatus.BAD_REQUEST.value());
	        body.put("error", "Bad Request");
	        body.put("message", ex.getMessage());
	        return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(EmailAlreadyExistsException.class)
	    public ResponseEntity<?> handleEmailAlreadyExists(EmailAlreadyExistsException ex) {
	        Map<String, Object> body = new HashMap<>();
	        body.put("timestamp", LocalDateTime.now());
	        body.put("status", HttpStatus.CONFLICT.value());
	        body.put("error", "Email Conflict");
	        body.put("message", ex.getMessage());
	        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
	    }

	    @ExceptionHandler(Exception.class)
	    public ResponseEntity<?> handleGenericException(Exception ex) {
	        Map<String, Object> body = new HashMap<>();
	        body.put("timestamp", LocalDateTime.now());
	        body.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
	        body.put("error", "Internal Server Error");
	        body.put("message", ex.getMessage());
	        return new ResponseEntity<>(body, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
}
