package com.exceptions.custom;

public class InvalidSideLengthException extends RuntimeException {

    public InvalidSideLengthException (String message) {
      super(message);
    }

}
