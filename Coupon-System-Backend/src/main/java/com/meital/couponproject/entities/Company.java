package com.meital.couponproject.entities;

import com.meital.couponproject.enums.Role;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "companies")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Company {

    //-------------------------company table definition

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    private Role role;

    @Transient
    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Coupon> coupons;

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
