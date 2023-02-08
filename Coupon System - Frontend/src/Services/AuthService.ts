import axios from "axios";
import { BaseUserModel } from "../Models/BaseUserModel";
import JwtWrapper from "../Models/JwtWrapper";
import { authStore, loginAction, logoutAction } from "../Redux/AuthState";
import appConfig from "../Utils/Config";

class AuthService {

    public async login(user: BaseUserModel): Promise<void> {
        const response = await axios.post<JwtWrapper>(appConfig.authenticationUrl, user);
        const jwtWrapper = response.data;
        const action = loginAction(jwtWrapper)
        authStore.dispatch(action);
    }

    public logout(): void {
        authStore.dispatch(logoutAction());
    }
}

const authService = new AuthService();

export default authService;
