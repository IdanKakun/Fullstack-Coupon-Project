import { error } from "console";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../../../Models/Category";
import CouponModel from "../../../Models/CouponModel";
import { authStore } from "../../../Redux/AuthState";
import companiesService from "../../../Services/CompaniesService";
import notificationService from "../../../Services/NotificationService";
import CouponCard from "../CouponCard/CouponCard";
import "./GetCompanyCoupons.css";

function GetCompanyCoupons(): JSX.Element {

    const navigate = useNavigate();
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    const companyId = authStore.getState().user.id;
    useEffect(() => {

        companiesService.getCompanyCoupons(companyId)
            .then(coupons => setCoupons(coupons))
            .catch (err => notificationService.error(err));     
}, []);


async function getByMaxPrice(): Promise<CouponModel[]> {

    const input = document.getElementById("maxPrice") as HTMLInputElement;
    const maxPrice = (+input.value);

    companiesService.getCouponsByMaxPrice(companyId, maxPrice)

        .then(coupons => setCoupons(coupons))
        .catch(err => notificationService.error(err));
    return coupons;
}


async function getByCategory(): Promise<CouponModel[]> {

    const input = document.getElementById("category") as HTMLInputElement;
    const category = input.value as Category;

    companiesService.getCouponsByCategory(companyId, category)
        .then(coupons => setCoupons(coupons))
        .catch(err => notificationService.error(err));
    return coupons;
}


return (
    <div className="GetCompanyCoupons">

        <h2>Company Coupons</h2>

        <label>Max Price </label>
        <input type="number" id="maxPrice" />
        <button onClick={getByMaxPrice}>Result</button>


        <label>Category </label>
        <input type="Category" id="category" />
        <button onClick={getByCategory}>Result</button>

        <br />

        {coupons.map(c => <CouponCard key={c.id} coupon={c} />)}


    </div>
);
}

export default GetCompanyCoupons;