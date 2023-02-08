import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BaseUserModel } from "../../../Models/BaseUserModel";
import authService from "../../../Services/AuthService";
import notificationService from "../../../Services/NotificationService";
import "./Login.css";

function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<BaseUserModel>();
    const navigate = useNavigate();

    async function send(user: BaseUserModel) {
        try {
            await authService.login(user);
            notificationService.success("Welcome Back!");
            navigate("/home");
        }
        catch (err: any) {
            notificationService.error("Email or password is incorrect.");
        }
    }

    return (
        <div className="Login Box">

            <form onSubmit={handleSubmit(send)}>

                <h2>Login to coupon system</h2>

                <label>Role: </label>
                <select defaultValue="" {...register("role")}>
                    <option value="" disabled>Select Role...</option>
                    <option>customer</option>
                    <option>company</option>
                    <option>admin</option>
                </select>

                <label>Email: </label>
                <input type="email" {...register("email")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button className="Button">Login</button>

            </form>

        </div>
    );
}

export default Login;
