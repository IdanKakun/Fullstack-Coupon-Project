import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CompanyModel } from "../../../../Models/BaseUserModel";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import "./CreateCompany.css";

function CreateCompany(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CompanyModel>();
    const navigate = useNavigate();

    async function addCompany(company: CompanyModel) {
        try {
            await adminService.createCompany(company);
            notificationService.success(`Company ${company.name} has been created`);
            navigate("/home");
        }
        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="CreateCompany Box">
            <form onSubmit={handleSubmit(addCompany)}>

                <h2>Create New Company</h2>

                <label>Name: </label>
                <input type="text" {...register("name", {
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

                <button className="Button">Create</button>

            </form>
        </div>
    );
}

export default CreateCompany;

