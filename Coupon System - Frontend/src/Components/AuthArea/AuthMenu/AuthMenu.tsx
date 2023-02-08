import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Role from "../../../Models/Role";
import { AdminModel, BaseUserModel, CompanyModel, CustomerModel } from "../../../Models/BaseUserModel";
import { authStore } from "../../../Redux/AuthState";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<BaseUserModel>();

    useEffect(() => {

        setUser(authStore.getState().user);

        const unsubscribe = authStore.subscribe(() => {
            setUser(authStore.getState().user);
        });

        return () => {
            unsubscribe();
        };

    }, []);

    function getDetails(): string {

        switch (user.role) {

            case Role.admin:
                return "Hello " + user.role;

            case Role.company:
                const company = user as CompanyModel;
                return "Hello " + company.name;


            case Role.customer:
                const customer = user as CustomerModel;
                return "Hello " + customer.firstName + " " + customer.lastName;

        }

    }

    return (
        <div className="AuthMenu">

            {
                !user && <>
                    <span>Hello Guest | </span>
                    <NavLink to="/login">Login</NavLink>
                </>
            }

            {
                user && <>
                    <span>{getDetails()} | </span>
                    <NavLink to="/logout">Logout</NavLink>
                </>
            }

        </div>
    );
}

export default AuthMenu;
