package com.meital.couponproject.dto;

import com.meital.couponproject.enums.Role;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserDto {
    private Long id;
    private String email;
    private String password;
    private Role role;
}
