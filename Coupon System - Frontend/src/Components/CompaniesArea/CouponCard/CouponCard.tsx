import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import "./CouponCard.css";

interface CouponCardProps {
    coupon: CouponModel;
}

function CouponCard(props: CouponCardProps): JSX.Element {

    return (

        <div className="CouponCard Box">
            <span>Title: {props.coupon.title}</span> <br />
            <span>Description: {props.coupon.description}</span> <br />
            <span>Start Date: {props.coupon.start_Date}</span> <br />
            <span>End Date: {props.coupon.end_Date}</span> <br />
            <span>Category: {props.coupon.category}</span> <br />
            <span>Amount: {props.coupon.amount}</span> <br />
            <span>Price: {props.coupon.price}$</span>

            <div>
                <NavLink to={"/coupon/details/" + props.coupon.id}>
                    <img src={props.coupon.image} />
                </NavLink>
            </div>
            
        </div>
    );
}

export default CouponCard;
