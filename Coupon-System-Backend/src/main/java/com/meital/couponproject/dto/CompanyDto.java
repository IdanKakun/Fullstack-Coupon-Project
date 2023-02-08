package com.meital.couponproject.dto;

import com.meital.couponproject.enums.Role;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CompanyDto {

    private Long id;

    private String name;

    private String email;

    private String password;

    private Role role;

    @Override
    public String toString() {
        return "CompanyDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}


