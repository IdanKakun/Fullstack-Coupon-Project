import { createStore } from "redux";
import { CompanyModel } from "../Models/BaseUserModel";
import Category from "../Models/Category";
import CouponModel from "../Models/CouponModel";

export class CompanyState {

    public coupon: CouponModel = null;
    public company: CompanyModel = null;
    public coupons: CouponModel[] = [];
    public companies: CompanyModel[] = [];
}

export enum couponActionType {
    createCoupon,
    updateCoupon,
    deleteCoupon,
    getCoupon,
    getCompanyCoupons,
    getCompanyCouponsByCategory,
    getCompanyCouponsByMaxPrice,
}

export interface CouponAction {
    type: couponActionType;
    payload: any;
}

export function createCouponAction(coupon: CouponModel): CouponAction {
    return { type: couponActionType.createCoupon, payload: coupon };
}

export function updateCouponAction(coupon: CouponModel): CouponAction {
    return { type: couponActionType.updateCoupon, payload: coupon };
}

export function deleteCouponAction(couponId: number): CouponAction {
    return { type: couponActionType.deleteCoupon, payload: couponId };
}

export function getCouponAction(couponId: number): CouponAction {
    return { type: couponActionType.getCoupon, payload: couponId };
}

export function getCompanyCouponsAction(companyId: number): CouponAction {
    return { type: couponActionType.getCompanyCoupons, payload: companyId };
}


export function getCompanyCouponsByCategoryAction(companyId: number, category: Category): CouponAction {
    return { type: couponActionType.getCompanyCouponsByCategory, payload: companyId + category };
}


export function getCompanyCouponsByMaxPriceAction(companyId: number, maxPrice: number): CouponAction {
    return { type: couponActionType.getCompanyCouponsByMaxPrice, payload: companyId + maxPrice };
}

export function companyReducer(currentState = new CompanyState(), action: CouponAction): CompanyState {

    const newState = { ...currentState };

    switch (action.type) {

        case couponActionType.createCoupon:
            newState.coupons = action.payload;
            break;

        case couponActionType.updateCoupon:
            const indexToUpdate = newState.coupons.findIndex(c => c.id === action.payload.id);
            newState.coupons[indexToUpdate] = action.payload;
            break;

    }
    return newState;
}
export const companyStore = createStore(companyReducer);
