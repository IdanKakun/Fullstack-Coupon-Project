import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Role from "../../../Models/Role";
import { BaseUserModel } from "../../../Models/BaseUserModel";
import { authStore } from "../../../Redux/AuthState";
import "./Menu.css";

function Menu(): JSX.Element {

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

    return (
        <div className="Menu">


            {user?.role === Role.admin &&
                <>
                    <span>Admin Menu</span>
                    <NavLink to="/admin/createCompany/">Create Company</NavLink>
                    <NavLink to="/admin/allCompanies/">See Companies</NavLink>

                    <NavLink to="/admin/createCustomer/">Create Customer</NavLink>
                    <NavLink to="/admin/allCustomers/">See Customers</NavLink>
                </>
            }


            {user?.role === Role.company &&
                <>
                    <span>Company Menu</span>
                    <NavLink to="/coupon/createCoupon/">Create Coupon</NavLink>
                    <NavLink to="/coupon/companies/getCoupons/:prodId">See My Coupons</NavLink>
                </>
            }


            {user?.role === Role.customer &&
                <>
                    <span>Customer Menu</span>
                    <NavLink to="/customers/coupons/myCoupons/">See My Coupons</NavLink>
                    <NavLink to="/customers/allCoupons/">Buy Coupons</NavLink>
                </>
            }

        </div>
    );
}

export default Menu;
