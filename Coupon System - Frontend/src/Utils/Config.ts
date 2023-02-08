import { config } from "process";

class Config { }

class DevelopmentConfig extends Config {

    public companyImagesUrl = "https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=2000"
    public customerImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBjl6mwIitcAG_QKMiF3qkg6m5FE4Q9ymPQ&usqp=CAU"

    //auth controller
    public authenticationUrl = "http://localhost:8080/authentication";

    //admin controller- company
    public createCompanyUrl = "http://localhost:8080/admin/createCompany/";
    public updateCompanyUrl = "http://localhost:8080/admin/updateCompany/";
    public deleteCompanyUrl = "http://localhost:8080/admin/deleteCompany/";
    public getCompanyUrl = "http://localhost:8080/admin/getCompany/";
    public getCompanyByEmailUrl = "http://localhost:8080/admin/getCompanyByEmail/";
    public getAllCompaniesUrl = "http://localhost:8080/admin/allCompanies";

    //admin controller- customer
    public createCustomerUrl = "http://localhost:8080/admin/createCustomer/";
    public updateCustomerUrl = "http://localhost:8080/admin/updateCustomer/";
    public deleteCustomerUrl = "http://localhost:8080/admin/deleteCustomer/";
    public getCustomerUrl = "http://localhost:8080/admin/getCustomer/";
    public getCustomerByEmailUrl = "http://localhost:8080/admin/getCustomerByEmail/";
    public getAllCustomersUrl = "http://localhost:8080/admin/allCustomers";

    //company controller- coupon
    public createCouponUrl = "http://localhost:8080/coupon/createCoupon/";
    public updateCouponUrl = "http://localhost:8080/coupon/updateCoupon/";
    public deleteCouponUrl = "http://localhost:8080/coupon/deleteCoupon/";
    public getCouponUrl = "http://localhost:8080/coupon/getCoupon/";
    public getCouponsUrl = "http://localhost:8080/coupon/companies/getCoupons/";
    public getCouponsByCategoryUrl = "http://localhost:8080/coupon/companies/getCouponsByCategory/";
    public getCouponsByMaxPriceUrl = "http://localhost:8080/coupon/companies/getCouponsByMaxPrice/";

    //customer controller
    public purchaseCouponUrl = "http://localhost:8080/customers/purchaseCoupon/";
    public getCustomerCouponsUrl = "http://localhost:8080/customers/coupons/myCoupons/";
    public getAllCouponsUrl = "http://localhost:8080/customers/allCoupons/";
    public getCustomerCouponsByCategoryUrl = "http://localhost:8080/customers/coupons/getCouponsByCategory/";
    public getCustomerCouponsByMaxPriceUrl = "http://localhost:8080/customers/coupons/getCouponsByMaxPrice/";
}

class ProductionConfig extends Config {

    public companyImagesUrl = "https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=2000"
    public customerImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBjl6mwIitcAG_QKMiF3qkg6m5FE4Q9ymPQ&usqp=CAU"

    //auth controller
    public authenticationUrl = "http://localhost:8080/authentication";

    //admin controller- company
    public createCompanyUrl = "http://localhost:8080/admin/createCompany/";
    public updateCompanyUrl = "http://localhost:8080/admin/updateCompany/";
    public deleteCompanyUrl = "http://localhost:8080/admin/deleteCompany/";
    public getCompanyUrl = "http://localhost:8080/admin/getCompany/";
    public getCompanyByEmailUrl = "http://localhost:8080/admin/getCompanyByEmail/";
    public getAllCompaniesUrl = "http://localhost:8080/admin/allCompanies";

    //admin controller- customer
    public createCustomerUrl = "http://localhost:8080/admin/createCustomer/";
    public updateCustomerUrl = "http://localhost:8080/admin/updateCustomer/";
    public deleteCustomerUrl = "http://localhost:8080/admin/deleteCustomer/";
    public getCustomerUrl = "http://localhost:8080/admin/getCustomer/";
    public getCustomerByEmailUrl = "http://localhost:8080/admin/getCustomerByEmail/";
    public getAllCustomersUrl = "http://localhost:8080/admin/allCustomers";

    //company controller- coupon
    public createCouponUrl = "http://localhost:8080/coupon/createCoupon/";
    public updateCouponUrl = "http://localhost:8080/coupon/updateCoupon/";
    public deleteCouponUrl = "http://localhost:8080/coupon/deleteCoupon/";
    public getCouponUrl = "http://localhost:8080/coupon/getCoupon/";
    public getCouponsUrl = "http://localhost:8080/coupon/companies/getCoupons/";
    public getCouponsByCategoryUrl = "http://localhost:8080/coupon/companies/getCouponsByCategory/";
    public getCouponsByMaxPriceUrl = "http://localhost:8080/coupon/companies/getCouponsByMaxPrice/";


    //customer controller
    public purchaseCouponUrl = "http://localhost:8080/customers/purchaseCoupon/";
    public getAllCouponsUrl = "http://localhost:8080/customers/allCoupons/";
    public getCustomerCouponsUrl = "http://localhost:8080/customers/coupons/myCoupons/";
    public getCustomerCouponsByCategoryUrl = "http://localhost:8080/customers/coupons/getCouponsByCategory/";
    public getCustomerCouponsByMaxPriceUrl = "http://localhost:8080/customers/coupons/getCouponsByMaxPrice/";
}


const appConfig = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default appConfig;
