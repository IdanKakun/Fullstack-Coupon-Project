import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyModel } from "../../../../Models/BaseUserModel";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import "./UpdateCompany.css";

function UpdateCompany(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<CompanyModel>();

    const navigate = useNavigate();
    const params = useParams();
    const prodId = +params.prodId;

    useEffect(() => {
        adminService.getCompany(prodId)
            .then(company => {
                setValue("id", company.id);
                setValue("name", company.name);
                setValue("email", company.email);
                setValue("password", company.password);
            })
            .catch(err => notificationService.error(err.message));
    }, []);

    async function updateCompany(company: CompanyModel) {
        try {
            await adminService.updateCompany(company);
            notificationService.success(`Company ${company.name} has been updated`);
            navigate("/home");
        }
        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="UpdateCompany Box">
            <form onSubmit={handleSubmit(updateCompany)}>

                <h2>update</h2>
                <label>Id: </label>
                <input type="number" disabled {...register("id")} />

                <label>Name: </label>
                <input type="text" disabled {...register("name", {
                    required: { value: true, message: "Missing name" },
                    minLength: { value: 2, message: "Name most be minmum 2 chars" },
                    maxLength: { value: 10, message: "Name most be maximum 10 chars" }
                })} />
                <span>{formState.errors?.name?.message}</span>

                <label>Email: </label>
                <input type="email" {...register("email", {
                    required: { value: true, message: "Missing email" },
                    minLength: { value: 8, message: "Email most be minmum 8 chars" },
                    maxLength: { value: 20, message: "Email most be maximum 15 chars" }
                })} />

                <label>Password: </label>
                <input type="password"{...register("password", {
                    required: { value: true, message: "Missing password" },
                    minLength: { value: 4, message: "Password most be minmum 4 chars" },
                    maxLength: { value: 10, message: "Password most be maximum 10 chars" }
                })} />

                <button className="Button">update</button>

            </form>
        </div>
    );
}


export default UpdateCompany;

