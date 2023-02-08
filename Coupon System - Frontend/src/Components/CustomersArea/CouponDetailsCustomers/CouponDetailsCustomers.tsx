import { useState, useEffect } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import { authStore } from "../../../Redux/AuthState";
import companiesService from "../../../Services/CompaniesService";
import notificationService from "../../../Services/NotificationService";
import "./CouponDetailsCustomers.css";

function CouponDetailsCustomers(): JSX.Element {


    const navigate = useNavigate();
    const params = useParams();
    const id = +params.prodId;

    const [coupon, setCoupon] = useState<CouponModel>();

    useEffect(() => {
        companiesService.getCoupon(id)
            .then(coupon => setCoupon(coupon))
            .catch(err => notificationService.error(err.message));
    }, []);

    return (
        <div className="CouponDetailsCustomers Box">
            {
                coupon &&
                <>

                    <h3>Title: {coupon.title}</h3>
                    <h3>Id: {coupon.id}</h3>
                    <h3>CompanyId: {coupon.companyId}</h3>
                    <h3>Category: {coupon.category}</h3>
                    <h3>Description: {coupon.description}</h3>
                    <h3>Start Date: {coupon.start_Date}</h3>
                    <h3>End Date: {coupon.end_Date}</h3>
                    <h3>Amount: {coupon.amount}</h3>
                    <h3>Price: {coupon.price}$</h3>
                    <br />
                    <br />

                    <NavLink to="/customers/allCoupons/" className="Button">Back</NavLink>
                </>
            }
        </div>
    );
}

export default CouponDetailsCustomers;
