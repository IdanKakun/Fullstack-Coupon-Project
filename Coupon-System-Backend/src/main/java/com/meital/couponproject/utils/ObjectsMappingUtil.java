package com.meital.couponproject.utils;

import com.meital.couponproject.dto.CompanyDto;
import com.meital.couponproject.dto.CouponDto;
import com.meital.couponproject.dto.CustomerDto;
import com.meital.couponproject.entities.Company;
import com.meital.couponproject.entities.Coupon;
import com.meital.couponproject.entities.Customer;
import com.meital.couponproject.dto.UserDto;
import com.meital.couponproject.enums.Role;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ObjectsMappingUtil {

    public static Company companyDtoToEntity(final CompanyDto companyDto) {
        return Company.builder()
                .name(companyDto.getName())
                .email(companyDto.getEmail())
                .password(String.valueOf(companyDto.getPassword()))
                .role(Role.company)
                .build();
    }


    public static Company companyDtoForUpdateToEntity(final CompanyDto companyDto) {
        return Company.builder()
                .id(companyDto.getId())
                .name(companyDto.getName())
                .email(companyDto.getEmail())
                .password(String.valueOf(companyDto.getPassword()))
                .role(Role.company)
                .build();
    }

    public static CompanyDto companyEntityToDto(final Company company) {
        return CompanyDto.builder()
                .id(company.getId())
                .name(company.getName())
                .email(company.getEmail())
                .password(String.valueOf(company.getPassword()))
                .role(Role.company)
                .build();
    }

    public static Customer customerDtoToEntity(final CustomerDto customerDto) {
        return Customer.builder()
                .id(customerDto.getId())
                .firstName(customerDto.getFirstName())
                .lastName(customerDto.getLastName())
                .email(customerDto.getEmail())
                .password(String.valueOf(customerDto.getPassword()))
                .role(Role.customer)
                .build();
    }


    public static Customer customerDtoForUpdateToEntity(final CustomerDto customerDto) {
        return Customer.builder()
                .id(customerDto.getId())
                .firstName(customerDto.getFirstName())
                .lastName(customerDto.getLastName())
                .email(customerDto.getEmail())
                .password(String.valueOf(customerDto.getPassword()))
                .role(Role.customer)
                .build();
    }

    public static CustomerDto customerEntityToDto(final Customer customer) {
        return CustomerDto.builder()
                .id(customer.getId())
                .firstName(customer.getFirstName())
                .lastName(customer.getLastName())
                .email(customer.getEmail())
                .password(String.valueOf(customer.getPassword()))
                .role(Role.customer)
                .build();
    }

    public static CouponDto couponEntityToDto(final Coupon coupon) {
        return CouponDto.builder()
                .id(coupon.getId())
                .companyId(coupon.getCompany().getId())
                .category(coupon.getCategory())
                .title(coupon.getTitle())
                .description(coupon.getDescription())
                .start_Date(coupon.getStart_date())
                .end_Date(coupon.getEnd_date())
                .amount(coupon.getAmount())
                .price(coupon.getPrice())
                .image(coupon.getImage())
                .build();
    }

    public static Coupon couponDtoToEntity(final CouponDto couponDto) {

        return Coupon.builder()
                .id(couponDto.getId())
                .company(Company.builder().id(couponDto.getCompanyId()).build())
                .category(couponDto.getCategory())
                .title(couponDto.getTitle())
                .description(couponDto.getDescription())
                .start_date(couponDto.getStart_Date())
                .end_date(couponDto.getEnd_Date())
                .amount(couponDto.getAmount())
                .price(couponDto.getPrice())
                .image(couponDto.getImage())
                .build();
    }

    public static UserDetails userDtoToSpringSecurityUser(final UserDto user) {
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                String.valueOf(user.getPassword()),
                new ArrayList<>()
        );
    }

    public static UserDetails companyToSpringSecurityUser(final Company company) {
        return new org.springframework.security.core.userdetails.User(
                company.getEmail(),
                String.valueOf(company.getPassword()),
                new ArrayList<>()
        );
    }

    public static UserDetails customerToSpringSecurityUser(final Customer customer) {
        return new org.springframework.security.core.userdetails.User(
                customer.getEmail(),
                String.valueOf(customer.getPassword()),
                new ArrayList<>()
        );
    }

    public static List<CouponDto> mappingCouponsToCouponsDto(List<Coupon> coupons) {
        List<CouponDto> couponsDto = new ArrayList<>();
        for (Coupon coupon : coupons) {
            CouponDto couponDto = ObjectsMappingUtil.couponEntityToDto(coupon);
            couponsDto.add(couponDto);
        }
        return couponsDto;
    }

    public static List<CustomerDto> mappingCustomersToCustomersDto(List<Customer> customers) {
        List<CustomerDto> customersDto = new ArrayList<>();
        for (Customer customer : customers) {
            CustomerDto customerDto = ObjectsMappingUtil.customerEntityToDto(customer);
            customersDto.add(customerDto);
        }
        return customersDto;
    }
}


