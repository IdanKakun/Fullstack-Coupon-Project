import { useState, useEffect } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import { authStore } from "../../../Redux/AuthState";
import companiesService from "../../../Services/CompaniesService";
import notificationService from "../../../Services/NotificationService";
import "./CouponDetails.css";

function CouponDetails(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const id = +params.prodId;

    const [coupon, setCoupon] = useState<CouponModel>();

    useEffect(() => {
        companiesService.getCoupon(id)
            .then(coupon => setCoupon(coupon))
            .catch(err => notificationService.error(err.message));
    }, []);

    async function deleteCoupon() {
        try {
            const ok = window.confirm("Are you sure?");
            if (!ok) return;
            await companiesService.deleteCoupon(coupon.id);
            alert("Coupon has been deleted!");
            navigate("/home");

        } catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="CouponDetails Box">
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

                    <NavLink to="/coupon/companies/getCoupons/:prodId" className="Button">Back</NavLink>
                    {
                        authStore.getState().token &&
                        <>
                            <span> | </span>
                            <NavLink to={"/coupon/updateCoupon/" + coupon.id} className="Button"> Update </NavLink>
                            <span> | </span>
                            <NavLink to="" className="Button" onClick={deleteCoupon}>Delete</NavLink>
                        </>
                    }

                </>
            }
        </div>
    );
}

export default CouponDetails;
