import { Navigate, Route, Routes } from "react-router-dom";
import CompaniesList from "../../AdminArea/CompanyFunctions/CompaniesList/CompaniesList";
import CompanyDetails from "../../AdminArea/CompanyFunctions/CompanyDetails/CompanyDetails";
import CreateCompany from "../../AdminArea/CompanyFunctions/CreateCompany/CreateCompany";
import GetCompany from "../../AdminArea/CompanyFunctions/GetCompany/GetCompany";
import UpdateCompany from "../../AdminArea/CompanyFunctions/UpdateCompany/UpdateCompany";
import CreateCustomer from "../../AdminArea/CustomerFunctions/CreateCustomer/CreateCustomer";
import CustomerDetails from "../../AdminArea/CustomerFunctions/CustomerDetails/CustomerDetails";
import CustomersList from "../../AdminArea/CustomerFunctions/CustomersList/CustomersList";
import GetCustomer from "../../AdminArea/CustomerFunctions/GetCustomer/GetCustomer";
import UpdateCustomer from "../../AdminArea/CustomerFunctions/UpdateCustomer/UpdateCustomer";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import CouponDetails from "../../CompaniesArea/CouponDetails/CouponDetails";
import CreateCoupon from "../../CompaniesArea/CreateCoupon/CreateCoupon";
import GetCompanyCoupons from "../../CompaniesArea/GetCompanyCoupons/GetCompanyCoupons";
import GetCoupon from "../../CompaniesArea/GetCoupon/GetCoupon";
import UpdateCoupon from "../../CompaniesArea/UpdateCoupon/UpdateCoupon";
import BuyCoupons from "../../CustomersArea/BuyCoupons/BuyCoupons";
import CouponDetailsCustomers from "../../CustomersArea/CouponDetailsCustomers/CouponDetailsCustomers";
import CustomerCoupons from "../../CustomersArea/CustomerCoupons/CustomerCoupons";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>

                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                {/* Home */}
                <Route path="/home" element={<Home />} />


                {/* Admin/customer */}
                <Route path="/admin/createCustomer/" element={<CreateCustomer />} />
                <Route path="/admin/updateCustomer/:prodId" element={<UpdateCustomer />} />
                <Route path="/admin/getCustomer/" element={<GetCustomer />} />
                <Route path="/admin/allCustomers/" element={<CustomersList />} />
                <Route path="admin/Customers/details/:prodId" element={<CustomerDetails />} />


                {/* Admin/company */}
                <Route path="/admin/createCompany/" element={<CreateCompany />} />
                <Route path="/admin/updateCompany/:prodId" element={<UpdateCompany />} />
                <Route path="/admin/getCompany/" element={<GetCompany />} />
                <Route path="/admin/allCompanies/" element={<CompaniesList />} />
                <Route path="admin/Companies/details/:prodId" element={<CompanyDetails />} />

                {/* Customers */}
                <Route path="/customers/coupons/myCoupons/" element={<CustomerCoupons />} />
                <Route path="/customers/allCoupons/" element={<BuyCoupons />} />
                <Route path="/customers/coupon/details/:prodId" element={<CouponDetailsCustomers />} />


                {/* Companies */}
                <Route path="/coupon/createCoupon/" element={<CreateCoupon />} />
                <Route path="/coupon/updateCoupon/:prodId" element={<UpdateCoupon />} />
                <Route path="/coupon/getCoupon/" element={<GetCoupon />} />
                <Route path="/coupon/companies/getCoupons/:prodId" element={<GetCompanyCoupons />} />
                <Route path="/coupon/details/:prodId" element={<CouponDetails />} />


                {/* Default route */}
                <Route path="/" element={<Navigate to="/home" />} />

                {/* Page not found route */}
                <Route path="*" element={<PageNotFound />} />

            </Routes>

        </div>
    );
}

export default Routing;
