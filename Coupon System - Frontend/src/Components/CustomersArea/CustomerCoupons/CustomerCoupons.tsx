import { SyntheticEvent, useEffect, useState } from "react";
import CouponModel from "../../../Models/CouponModel";
import { authStore } from "../../../Redux/AuthState";
import customersService from "../../../Services/CustomersService";
import notificationService from "../../../Services/NotificationService";
import CouponCard from "../../CompaniesArea/CouponCard/CouponCard";
import CouponCardCustomers from "../CouponCardCustomers/CouponCardCustomers";
import "./CustomerCoupons.css";

function CustomerCoupons(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    const customerId = authStore.getState().user.id;

    useEffect(() => {
        customersService.getCustomerCoupons(customerId)
            .then(coupons => setCoupons(coupons))
            .catch(err => notificationService.error(err));
    }, []);

    function filterByPrice(args: SyntheticEvent) {
        const input = args.target as HTMLInputElement;
        const maxPrice = +input.value;
        if (input.value === "") {
            setCoupons(coupons);
        }
        else {
            const filteredCoupons = coupons.filter(c => c.price <= maxPrice);
            setCoupons(filteredCoupons);
        }
    }

    function filterByCategory(args: SyntheticEvent) {
        const select = args.target as HTMLSelectElement;
        const category = select.value;
        const filteredCoupons = coupons.filter(c => c.category === category);
        setCoupons(filteredCoupons);
    }

    return (
        <div className="CustomerCoupons">

            <label>Max Price: </label>
            <input type="number" onChange={filterByPrice} />

            <span> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; </span>

            <label>Category: </label>
            <select defaultValue="" onChange={filterByCategory}>
                <option disabled value="">Select Category...</option>
                <option>FOOD</option>
                <option>ELECTRICITY</option>
                <option>RESTAURANT</option>
                <option>VACATION</option>
                <option>SPA AND BEAUTY</option>
                <option>THINGS TO DO CHILDREN</option>
                <option>HOME DECOR</option>

            </select>

            <hr />

            <h2>My Coupons</h2>

            {coupons.map(c => <CouponCardCustomers key={c.id} coupon={c} />)}
        </div>
    );
}

export default CustomerCoupons;
