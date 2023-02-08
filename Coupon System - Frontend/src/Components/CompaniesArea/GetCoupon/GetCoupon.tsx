import CouponModel from "../../../Models/CouponModel";
import companiesService from "../../../Services/CompaniesService";
import notificationService from "../../../Services/NotificationService";
import "./GetCoupon.css";

function GetCoupon(): JSX.Element {


    function getHandel(): number {
        const input = document.getElementById("couponId") as HTMLInputElement | null;
        const couponId = (+input.value);
        return couponId;
    }

    async function send(): Promise<CouponModel> {
        try {
            const couponId = getHandel();
            const coupon = await companiesService.getCoupon(couponId);
            notificationService.success(`Coupon ${coupon.title} has been geted`);
            return coupon;
        }

        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="GetCoupon">
            <h2>Get Coupon</h2>

            <label>Enter Coupon Id: </label>
            <input type="number" id="couponId" />
            <button onClick={send}>Result</button>

        </div>
    );
}

export default GetCoupon;
