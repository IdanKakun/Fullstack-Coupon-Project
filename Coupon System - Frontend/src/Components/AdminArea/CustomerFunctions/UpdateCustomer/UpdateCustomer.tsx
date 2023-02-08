import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerModel } from "../../../../Models/BaseUserModel";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import "./UpdateCustomer.css";

function UpdateCustomer(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<CustomerModel>();

    const navigate = useNavigate();
    const params = useParams();
    const prodId = +params.prodId;

    useEffect(() => {
        adminService.getCustomer(prodId)
            .then(customer => {
                setValue("id", customer.id);
                setValue("firstName", customer.firstName);
                setValue("lastName", customer.lastName);
                setValue("email", customer.email);
                setValue("password", customer.password);
            })
            .catch(err => notificationService.error(err.message));
    }, []);

    async function updateCustomer(customer: CustomerModel) {
        try {
            await adminService.updateCustomer(customer);
            notificationService.success(`Customer ${customer.firstName} ` + ` ${customer.lastName} has been updated`);
            navigate("/home");
        }
        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="UpdateCustomer Box">
            <form onSubmit={handleSubmit(updateCustomer)}>

                <h2>update</h2>
                <label>Id: </label>
                <input type="number" disabled {...register("id")} />

                <label>FirstName: </label>
                <input type="text" {...register("firstName", {
                    required: { value: true, message: "Missing first name" },
                    minLength: { value: 2, message: "First name most be minmum 2 chars" },
                    maxLength: { value: 10, message: "First name most be maximum 10 chars" }
                })} />
                <span>{formState.errors?.firstName?.message}</span>

                <label>LastName: </label>
                <input type="text" {...register("lastName", {
                    required: { value: true, message: "Missing last name" },
                    minLength: { value: 2, message: "Last name most be minmum 2 chars" },
                    maxLength: { value: 10, message: "Last name most be maximum 10 chars" }
                })} />
                <span>{formState.errors?.lastName?.message}</span>

                <label>Email: </label>
                <input type="email" {...register("email", {
                    required: { value: true, message: "Missing email" },
                    minLength: { value: 8, message: "Email most be minmum 8 chars" },
                    maxLength: { value: 20, message: "Email most be maximum 15 chars" }
                })} />

                <label>Password: </label>
                <input type="password"{...register("password", {
                    required: { value: true, message: "Missing password" },
                    minLength: { value: 4, message: "Name most be minmum 4 chars" },
                    maxLength: { value: 10, message: "Name most be maximum 10 chars" }
                })} />

                <button className="Button">update</button>

            </form>
        </div>
    );
}


export default UpdateCustomer;
