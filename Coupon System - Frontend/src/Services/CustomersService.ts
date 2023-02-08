import axios from "axios";
import Category from "../Models/Category";
import CouponModel from "../Models/CouponModel";
import { buyCouponAction, customersStore, fetchCouponsAction } from "../Redux/CustomersState";
import appConfig from "../Utils/Config";

class CustomersService {

    public async purchaseCoupon(customerId: number, couponId: number): Promise<CouponModel> {
        const response = await axios.post<CouponModel>(appConfig.purchaseCouponUrl + customerId + "/" + couponId);
        const coupon = response.data;
        customersStore.dispatch(buyCouponAction(coupon));
        return coupon;
    }

    public async getCustomerCoupons(customerId: number): Promise<CouponModel[]> {
        const response = await axios.get<CouponModel[]>(appConfig.getCustomerCouponsUrl + customerId);
        const coupons = response.data;
        console.log(coupons);
        customersStore.dispatch(fetchCouponsAction(coupons));

        return coupons;
    }

    public async getAllCoupons(): Promise<CouponModel[]> {
        const response = await axios.get<CouponModel[]>(appConfig.getAllCouponsUrl);
        const coupons = response.data;
        return coupons;
    }

    public async getCustomerCouponsByCategory(customerId: Number, category: Category): Promise<CouponModel[]> {
        const response = await axios.get<CouponModel[]>(appConfig.getCustomerCouponsByCategoryUrl + customerId + "/" + category);
        const coupons = response.data;
        return coupons;
    }

    public async getCustomerCouponsByMaxPrice(customerId: number, maxPrice: number): Promise<CouponModel[]> {
        const response = await axios.get<CouponModel[]>(appConfig.getCustomerCouponsByMaxPriceUrl + customerId + "/" + maxPrice);
        const coupons = response.data;
        return coupons;
    }

}

const customersService = new CustomersService();

export default customersService; 