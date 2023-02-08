import axios from "axios";
import Category from "../Models/Category";
import CouponModel from "../Models/CouponModel";
import * as CompanyState from "../Redux/CompanyState";
import appConfig from "../Utils/Config";

class CompaniesService {

    public async createCoupon(coupon: CouponModel): Promise<CouponModel> {
        const response = await axios.post<CouponModel>(appConfig.createCouponUrl, coupon);
        const theCoupon = response.data;
        CompanyState.companyStore.dispatch(CompanyState.createCouponAction(coupon));
        return theCoupon;
    }

    public async updateCoupon(coupon: CouponModel): Promise<CouponModel> {
        const response = await axios.put<CouponModel>(appConfig.updateCouponUrl, coupon);
        const udpatedCoupon = response.data;
        CompanyState.companyStore.dispatch(CompanyState.updateCouponAction(coupon));
        return udpatedCoupon;
    }

    public async deleteCoupon(couponId: number): Promise<void> {
        await axios.delete<CouponModel>(appConfig.deleteCouponUrl + couponId);
        CompanyState.companyStore.dispatch(CompanyState.deleteCouponAction(couponId));
    }


    public async getCoupon(couponId: number): Promise<CouponModel> {
        const response = await axios.get<CouponModel>(appConfig.getCouponUrl + couponId);
        const coupon = response.data;
        CompanyState.companyStore.dispatch(CompanyState.getCouponAction(couponId));
        return coupon;
    }

    public async getCompanyCoupons(companyId: number): Promise<CouponModel[]> {
        const response = await axios.get<CouponModel[]>(appConfig.getCouponsUrl + companyId);
        const coupons = response.data;
        CompanyState.companyStore.dispatch(CompanyState.getCompanyCouponsAction(companyId));
        return coupons;
    }

    public async getCouponsByCategory(companyId: number, category: Category): Promise<CouponModel[]> {
        const response = await axios.get<CouponModel[]>(appConfig.getCouponsByCategoryUrl + companyId + "/" + category);
        const coupons = response.data;
        CompanyState.companyStore.dispatch(CompanyState.getCompanyCouponsByCategoryAction(companyId, category));
        return coupons;
    }


    public async getCouponsByMaxPrice(companyId: number, maxPrice: number): Promise<CouponModel[]> {
        const response = await axios.get<CouponModel[]>(appConfig.getCouponsByMaxPriceUrl + companyId + "/" + maxPrice);
        const coupons = response.data;
        CompanyState.companyStore.dispatch(CompanyState.getCompanyCouponsByMaxPriceAction(companyId, maxPrice));
        return coupons;
    }
}

const companiesService = new CompaniesService();

export default companiesService;

