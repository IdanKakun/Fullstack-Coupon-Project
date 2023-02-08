import { useEffect, useState } from "react";
import CouponModel from "../../../Models/CouponModel";
import { authStore } from "../../../Redux/AuthState";
import customersService from "../../../Services/CustomersService";
import notificationService from "../../../Services/NotificationService";
import CouponCardCustomers from "../CouponCardCustomers/CouponCardCustomers";
import "./BuyCoupons.css";

function BuyCoupons(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);

    useEffect(() => {
        customersService.getAllCoupons()
            .then(coupons => setCoupons(coupons))
            .catch(err => notificationService.error(err));
    }, []);

    async function buyCoupon(couponId: number) {
        try {
            const customerId = authStore.getState().user.id;
            await customersService.purchaseCoupon(customerId, couponId);
            notificationService.success(`Coupon has been purchased`);
        }
        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="BuyCoupons">

            <h2>Buy Coupons</h2>

            {coupons.map(c => <CouponCardCustomers key={c.id} coupon={c} buy={buyCoupon} />)}

        </div>
    );
}

export default BuyCoupons;
