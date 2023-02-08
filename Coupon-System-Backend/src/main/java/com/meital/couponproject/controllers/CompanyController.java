package com.meital.couponproject.controllers;

import com.meital.couponproject.dto.CouponDto;
import com.meital.couponproject.enums.CouponCategory;
import com.meital.couponproject.errors.exceptions.ApplicationException;
import com.meital.couponproject.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("coupon")
@RestController
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    //--------------------------------create new coupon --------------------------
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "createCoupon")
    public CouponDto createCoupon(@RequestBody final CouponDto couponDto) throws ApplicationException {
        return companyService.createCoupon(couponDto);
    }

    //--------------------------------update coupon --------------------------
    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "updateCoupon")
    public CouponDto updateCoupon(@RequestBody final CouponDto couponDto) throws ApplicationException {
        return companyService.updateCoupon(couponDto);
    }

    //----------------------------------delete coupon -------------------------------
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "deleteCoupon/{id}")
    public void deleteCoupon(@PathVariable("id") final Long couponId) throws ApplicationException {
        companyService.deleteCoupon(couponId);
    }

    //---------------------------------get coupon ---------------------------------
    @GetMapping(path = "getCoupon/{id}")
    public CouponDto getCoupon(@PathVariable("id") final long couponId) throws ApplicationException {
        return companyService.getCoupon(couponId);
    }

    //------------------------------get all coupons ----------------------------------
    @GetMapping(path = "companies/getCoupons/{companyId}")
    public List<CouponDto> getCompanyCoupons(@PathVariable("companyId") final long companyId) throws ApplicationException {
        return companyService.getCompanyCoupons(companyId);
    }

    //------------------------------get company coupons by category ----------------------------------
    @GetMapping(path = "companies/getCouponsByCategory/{companyId}/{couponCategory}")
    public List<CouponDto> getCompanyCouponsByCategory(@PathVariable("companyId") Long companyId,
                                                       @PathVariable("couponCategory") final CouponCategory category) throws ApplicationException {
        return companyService.getCompanyCouponsByCategory(companyId, category);
    }

    //------------------------------get company coupons by max price ----------------------------------
    @GetMapping(path = "companies/getCouponsByMaxPrice/{companyId}/{maxPrice}")
    public List<CouponDto> getCompanyCouponsByMaxPrice(@PathVariable("companyId") final long companyId,
                                                       @PathVariable("maxPrice") final double maxPrice) throws ApplicationException {
        return companyService.getCompanyCouponsByMaxPrice(companyId, maxPrice);
    }

}
