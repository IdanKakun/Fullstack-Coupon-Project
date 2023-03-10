package com.meital.couponproject.errors.exceptions;

import com.meital.couponproject.enums.ErrorType;
import lombok.Getter;

public class ApplicationException extends Exception {
    @Getter

    private final ErrorType errorType;

    // This is used when the exception is intentionally thrown
    public ApplicationException(ErrorType errorType) {
        super(errorType + " | " + errorType.getInternalErrorCode() + " | " + errorType.getInternalMessage());
        this.errorType = errorType;
    }
}
