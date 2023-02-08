package com.meital.couponproject.controllers;

import com.meital.couponproject.dto.JwtDto;
import com.meital.couponproject.dto.UserDto;
import com.meital.couponproject.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("authentication")
@RestController
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping
    public JwtDto authenticate(@RequestBody final UserDto user) {
        return authService.authenticate(user);
    }
}
