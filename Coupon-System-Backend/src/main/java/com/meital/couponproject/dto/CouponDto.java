package com.meital.couponproject.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.meital.couponproject.enums.CouponCategory;
import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class CouponDto {

    private Long id;

    private Long companyId;

    private CouponCategory category;

    private String title;

    private String description;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate start_Date;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate end_Date;

    private Integer amount;

    private Double price;

    private String image;

}
