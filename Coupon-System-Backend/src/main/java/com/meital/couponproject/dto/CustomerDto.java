package com.meital.couponproject.dto;

import com.meital.couponproject.enums.Role;
import lombok.*;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private Role role;

    @Override
    public String toString() {
        return "CustomerDto{" +
                "id=" + id +
                ", first_Name='" + firstName + '\'' +
                ", last_Name='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

