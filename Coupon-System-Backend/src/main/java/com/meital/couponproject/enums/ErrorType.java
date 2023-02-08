package com.meital.couponproject.enums;


import lombok.Getter;

public enum ErrorType {

    EMAIL_ALREADY_EXISTS(603, "Email already exists"),
    COMPANY_NAME_ALREADY_EXISTS(603, "Company name already exists"),
    COUPON_ALREADY_EXISTS(603, "Coupon already exists"),
    THE_COUPON_HAS_ALREADY_BEEN_PURCHASED(605, "The coupon has already been purchased"),
    COUPON_OUT_OF_STOCK(605, "Coupon out of stock"),
    COUPON_DOES_NOT_EXIST(605, "Coupon doesn't exist"),
    NO_COUPONS_WERE_FOUNDS(605, "No coupons were founds"),
    COUPON_HAS_EXPIRED(605, "Coupon has expired"),
    COMPANY_DOES_NOT_EXISTS(607, "Company doesn't exists"),
    CUSTOMER_DOES_NOT_EXISTS(607, "Customer doesn't exists"),
    NO_COMPANIES_WERE_FOUNDS(605, "No companies were founds"),
    NO_CUSTOMERS_WERE_FOUNDS(605, "No customers were founds");


    @Getter
    private final int internalErrorCode;
    @Getter
    private final String internalMessage;


    //private Constructor
    ErrorType(int internalErrorCode, String internalMessage) {
        this.internalErrorCode = internalErrorCode;
        this.internalMessage = internalMessage;
    }
}
