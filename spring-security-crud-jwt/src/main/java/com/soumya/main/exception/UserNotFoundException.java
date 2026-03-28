package com.soumya.main.exception;

//@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends Exception{
    public UserNotFoundException(String details){
        super(details);
    }
}
