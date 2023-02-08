package com.meital.couponproject.controllers;

import com.meital.couponproject.dto.CouponDto;
import com.meital.couponproject.dto.CustomerDto;
import com.meital.couponproject.enums.CouponCategory;
import com.meital.couponproject.errors.exceptions.ApplicationException;
import com.meital.couponproject.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("customers")
@RestController
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping(path = "purchaseCoupon/{customerId}/{couponId}")
    public void purchaseCoupon(@PathVariable final Long customerId,
                               @PathVariable final Long couponId) throws ApplicationException {
        customerService.purchaseCoupon(customerId, couponId);
    }

    @GetMapping(path = "coupons/myCoupons/{customerId}")
    public List<CouponDto> getCustomerCoupons(@PathVariable("customerId") final Long customerId) throws ApplicationException {
        return customerService.getCustomerCoupons(customerId);
    }

    @GetMapping(path = "allCoupons")
    public List<CouponDto> getAllCoupons() {
        return customerService.getAllCoupons();
    }

    @GetMapping(path = "coupons/getCouponsByCategory/{customerId}/{couponCategory}")
    public List<CouponDto> getCustomerCouponsByCategory(@PathVariable("customerId") final Long customerId,
                                                        @PathVariable final CouponCategory couponCategory) throws ApplicationException {
        return customerService.getCustomerCouponsByCategory(customerId, couponCategory);
    }

    @GetMapping(path = "coupons/getCouponsByMaxPrice/{customerId}/{maxPrice}")
    public List<CouponDto> getCustomerCouponsByMaxPrice(@PathVariable("customerId") final Long customerId,
                                                        @PathVariable final Double maxPrice) throws ApplicationException {
        return customerService.getCustomerCouponsByMaxPrice(customerId, maxPrice);
    }

    @GetMapping(path = "{id}")
    public CustomerDto getCustomer(@PathVariable("id") final Long customerId) throws ApplicationException {
        return customerService.getCustomer(customerId);
    }
}
