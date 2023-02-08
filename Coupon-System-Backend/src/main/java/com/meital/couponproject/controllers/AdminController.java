package com.meital.couponproject.controllers;


import com.meital.couponproject.dto.CompanyDto;
import com.meital.couponproject.dto.CustomerDto;
import com.meital.couponproject.entities.Company;
import com.meital.couponproject.errors.exceptions.ApplicationException;
import com.meital.couponproject.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("admin")
@RestController
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;


    //Company --------

    //--------------------------------create new company --------------------------
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "createCompany")
    public CompanyDto createCompany(@RequestBody final CompanyDto companyDto) throws ApplicationException {
        return adminService.createCompany(companyDto);
    }

    //--------------------------------update company --------------------------
    @PutMapping(path = "updateCompany")
    public CompanyDto updateCompany(@RequestBody final CompanyDto companyDto) throws ApplicationException {
        return adminService.updateCompany(companyDto);
    }

    //----------------------------------delete company -------------------------------
    @DeleteMapping(path = "deleteCompany/{id}")
    public void deleteCompany(@PathVariable("id") Long companyId) throws ApplicationException {
        adminService.deleteCompany(companyId);
    }

    //---------------------------------get company ---------------------------------
    @GetMapping(path = "getCompany/{id}")
    public CompanyDto getCompany(@PathVariable("id") final Long companyId) throws ApplicationException {
        return adminService.getCompany(companyId);
    }

    @GetMapping(path = "getCompanyByEmail/{email}")
    public CompanyDto getCompanyByEmail(@PathVariable("email") final String email) throws ApplicationException {
        return adminService.getCompanyByEmail(email);
    }

    //------------------------------get all companies ----------------------------------
    @GetMapping(path = "allCompanies")
    public List<Company> getAllCompanies() throws ApplicationException {
        return adminService.getAllCompanies();
    }


    //Customer --------

    //--------------------------------create new customer --------------------------
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "createCustomer")
    public CustomerDto createCustomer(@RequestBody final CustomerDto customerDto) throws ApplicationException {
        return adminService.createCustomer(customerDto);
    }

    //--------------------------------update customer --------------------------
    @PutMapping(path = "updateCustomer")
    public CustomerDto updateCustomer(@RequestBody final CustomerDto customerDto) throws ApplicationException {
        return adminService.updateCustomer(customerDto);
    }

    //----------------------------------delete customer -------------------------------
    @DeleteMapping(path = "deleteCustomer/{id}")
    public void deleteCustomer(@PathVariable("id") Long customerId) throws ApplicationException {
        adminService.deleteCustomer(customerId);
    }

    //---------------------------------get customer ---------------------------------
    @GetMapping(path = "getCustomer/{id}")
    public CustomerDto getCustomer(@PathVariable("id") final Long customerId) throws ApplicationException {
        return adminService.getCustomer(customerId);
    }

    @GetMapping(path = "getCustomerByEmail/{email}")
    public CustomerDto getCustomerByEmail(@PathVariable("email") final String email) throws ApplicationException {
        return adminService.getCustomerByEmail(email);
    }

    //------------------------------get all customers ----------------------------------
    @GetMapping(path = "allCustomers")
    public List<CustomerDto> getAllCustomers() throws ApplicationException {
        return adminService.getAllCustomers();
    }
}
