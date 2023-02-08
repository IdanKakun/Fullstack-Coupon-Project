import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyModel } from "../../../Models/BaseUserModel";
import CouponModel from "../../../Models/CouponModel";
import adminService from "../../../Services/AdminService";
import companiesService from "../../../Services/CompaniesService";
import notificationService from "../../../Services/NotificationService";
import "./UpdateCoupon.css";

function UpdateCoupon(): JSX.Element {


    const { register, handleSubmit, formState, setValue } = useForm<CouponModel>();

    const navigate = useNavigate();
    const params = useParams();
    const prodId = +params.prodId;

    useEffect(() => {

        companiesService.getCoupon(prodId)
            .then(coupon => {
                setValue("id", coupon.id);
                setValue("title", coupon.title);
                setValue("companyId", coupon.companyId);
                setValue("category", coupon.category);
                setValue("description", coupon.description);
                setValue("start_Date", coupon.start_Date);
                setValue("end_Date", coupon.end_Date);
                setValue("amount", coupon.amount);
                setValue("price", coupon.price);
                setValue("image", coupon.image);
            })
            .catch(err => notificationService.error(err.message));
    }, []);

    async function updateCoupon(coupon: CouponModel) {
        try {
            await companiesService.updateCoupon(coupon);
            notificationService.success(`Coupon ${coupon.title} has been updated`);
            navigate("/home");
        }
        catch (err: any) {
            notificationService.error(err);
        }
    }


    return (
        <div className="UpdateCoupon Box">
            <form onSubmit={handleSubmit(updateCoupon)}>

                <h2>Update Coupon</h2>

                <label>Id: </label>
                <input type="number" disabled {...register("id")} />

                <label>Title: </label>
                <input type="text" {...register("title", {
                    required: { value: true, message: "Missing title" },
                    minLength: { value: 2, message: "Title most be minmum 2 chars" },
                    maxLength: { value: 10, message: "Title most be maximum 10 chars" }
                })} />
                <span>{formState.errors?.title?.message}</span>

                <label>Company Id: </label>
                <input type="number" disabled {...register("companyId")} />

                <label>Category: </label>
                <input type="category"{...register("category", {
                    required: { value: true, message: "Missing category" },
                    minLength: { value: 4, message: "Category most be minmum 4 chars" },
                    maxLength: { value: 10, message: "Category most be maximum 10 chars" }
                })} />

                <label>Description: </label>
                <input type="text" {...register("description", {
                    required: { value: true, message: "Missing description" },
                    minLength: { value: 2, message: "Description most be minmum 2 chars" },
                    maxLength: { value: 100, message: "Description most be maximum 100 chars" }
                })} />
                <span>{formState.errors?.description?.message}</span>

                <label>Start Date: </label>
                <input type="text" {...register("start_Date", {
                    required: { value: true, message: "Missing start date" },
                    minLength: { value: 4, message: "Start date most be minmum 4 chars" },
                    maxLength: { value: 100, message: "Start date most be maximum 20 chars" }
                })} />
                <span>{formState.errors?.start_Date?.message}</span>

                <label>End Date: </label>
                <input type="text" {...register("end_Date", {
                    required: { value: true, message: "Missing end date" },
                    minLength: { value: 4, message: "End date most be minmum 4 chars" },
                    maxLength: { value: 100, message: "End date most be maximum 20 chars" }
                })} />
                <span>{formState.errors?.end_Date?.message}</span>

                <label>Amount: </label>
                <input type="number" {...register("amount", {
                    required: { value: true, message: "Missing amount" },
                    minLength: { value: 1, message: "Amount most be minmum 1 chars" },
                    maxLength: { value: 20, message: "Amount most be maximum 20 chars" }
                })} />
                <span>{formState.errors?.amount?.message}</span>

                <label>Price: </label>
                <input type="number" {...register("price", {
                    required: { value: true, message: "Missing price" },
                    minLength: { value: 1, message: "Price most be minmum 1 chars" },
                    maxLength: { value: 20, message: "Price most be maximum 20 chars" }
                })} />
                <span>{formState.errors?.price?.message}</span>

                <label>Image: </label>
                <input type="text" {...register("image", {
                    required: { value: true, message: "Missing image url" },
                    minLength: { value: 4, message: "Image url most be minmum 4 chars" },
                    maxLength: { value: 1000, message: "Image url most be maximum 1000 chars" }
                })} />
                <span>{formState.errors?.image?.message}</span>


                <button>Update</button>

            </form>

        </div>
    );
}

export default UpdateCoupon;
