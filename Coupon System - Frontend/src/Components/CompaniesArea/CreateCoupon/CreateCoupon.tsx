import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import { authStore } from "../../../Redux/AuthState";
import companiesService from "../../../Services/CompaniesService";
import notificationService from "../../../Services/NotificationService";
import "./CreateCoupon.css";

function CreateCoupon(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CouponModel>();
    const navigate = useNavigate();

    const user = authStore.getState().user;

    async function addCoupon(coupon: CouponModel) {
        try {
            await companiesService.createCoupon(coupon);
            notificationService.success(`Coupon ${coupon.title} has been created`);
            navigate("/home");
        }
        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="CreateCoupon Box">

            <form onSubmit={handleSubmit(addCoupon)}>

                <h2>Create New Coupon</h2>

                <label>Title: </label>
                <input type="text" {...register("title", {
                    required: { value: true, message: "Missing title" },
                    minLength: { value: 2, message: "Title most be minmum 2 chars" },
                    maxLength: { value: 10, message: "Title most be maximum 10 chars" }
                })} />
                <span>{formState.errors?.title?.message}</span>

                <label>Company Id: </label>
                <input type="number" disabled value={user.id} {...register("companyId")} />

                <label>Category: </label>
                <input type="Category"{...register("category", {
                    required: { value: true, message: "Missing category" },
                    minLength: { value: 4, message: "Category most be minmum 4 chars" },
                    maxLength: { value: 15, message: "Category most be maximum 15 chars" }
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


                <button className="Button">Create</button>

            </form>

        </div>
    );
}

export default CreateCoupon;
