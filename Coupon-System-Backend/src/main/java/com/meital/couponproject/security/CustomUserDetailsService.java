package com.meital.couponproject.security;

import com.meital.couponproject.dto.UserDto;
import com.meital.couponproject.entities.Company;
import com.meital.couponproject.entities.Customer;
import com.meital.couponproject.enums.Role;
import com.meital.couponproject.repo.CompanyRepo;
import com.meital.couponproject.repo.CustomerRepo;
import com.meital.couponproject.utils.ObjectsMappingUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final CompanyRepo companyRepo;
    private final CustomerRepo customerRepo;

    @Override
    public UserDetails loadUserByUsername(final String email) throws UsernameNotFoundException {

        UserDetails userDetails = null;

        if ("admin@admin.com".equals(email)) {
            UserDto admin = UserDto.builder()
                    .email(email)
                    .password("admin")
                    .role(Role.admin)
                    .build();
            userDetails = ObjectsMappingUtil.userDtoToSpringSecurityUser(admin);

        } else {
            if (companyRepo.existsByEmail(email)) {
                Company company = companyRepo.findByEmail(email);
                userDetails = ObjectsMappingUtil.companyToSpringSecurityUser(company);
            } else {
                if (customerRepo.existsByEmail(email)) {
                    Customer customer = customerRepo.findByEmail(email);
                    userDetails = ObjectsMappingUtil.customerToSpringSecurityUser(customer);
                }
            }
        }
        return userDetails;
    }
}