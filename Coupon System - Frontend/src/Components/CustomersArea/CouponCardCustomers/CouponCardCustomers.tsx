import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import "./CouponCardCustomers.css";


interface CouponCardProps {
    coupon: CouponModel;
    buy?: (couponId: number) => void;
}

function CouponCardCustomers(props: CouponCardProps): JSX.Element {
    return (
        <div className="CouponCardCustomers Box">
            <span>Title: {props.coupon.title}</span> <br />
            <span>Description: {props.coupon.description}</span> <br />
            <span>Start Date: {props.coupon.start_Date}</span> <br />
            <span>End Date: {props.coupon.end_Date}</span> <br />
            <span>Category: {props.coupon.category}</span> <br />
            <span>Amount: {props.coupon.amount}</span> <br />
            <span>Price: {props.coupon.price}$</span>

            <div>
                <NavLink to={"/customers/coupon/details/" + props.coupon.id}>
                    <img src={props.coupon.image} />
                </NavLink>
            </div>
            {
                props.buy &&
                <button className="Button" onClick={() => props.buy(props.coupon.id)}>🛒</button>
            }

        </div>
    );
}

export default CouponCardCustomers;
