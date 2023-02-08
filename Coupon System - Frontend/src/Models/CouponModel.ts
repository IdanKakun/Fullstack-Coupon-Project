import Category from "./Category";

class CouponModel {
    public id: number;
    public title: string;
    public companyId: number;
    public category: Category;
    public description: string;
    public start_Date: string;
    public end_Date: string;
    public amount: number;
    public price: number;
    public image: string;
}

export default CouponModel;