package com.meital.couponproject.service;

import com.meital.couponproject.dto.JwtDto;
import com.meital.couponproject.dto.UserDto;
import com.meital.couponproject.enums.Role;
import com.meital.couponproject.repo.CompanyRepo;
import com.meital.couponproject.repo.CustomerRepo;
import com.meital.couponproject.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final CompanyRepo companyRepo;
    private final CustomerRepo customerRepo;

    public JwtDto authenticate(final UserDto user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), String.valueOf(user.getPassword()))
            );
        } catch (final BadCredentialsException e) {
            throw new RuntimeException("Incorrect credentials");
        }
        if (user.getRole().equals(Role.company)) {
            return new JwtDto(JwtUtil.generateToken(companyRepo.findByEmail(user.getEmail())));
        } else if (user.getRole().equals(Role.customer)) {
            return new JwtDto(JwtUtil.generateToken(customerRepo.findByEmail(user.getEmail())));
        }
        return new JwtDto(JwtUtil.generateToken(user.getEmail()));
    }
}
