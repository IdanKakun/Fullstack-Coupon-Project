import { useState, useEffect } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { CompanyModel, CustomerModel } from "../../../../Models/BaseUserModel";
import { authStore } from "../../../../Redux/AuthState";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import "./CustomerDetails.css";

function CustomerDetails(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const id = +params.prodId;

    const [customer, setCustomer] = useState<CustomerModel>();

    useEffect(() => {
        adminService.getCustomer(id)
            .then(customer => setCustomer(customer))
            .catch(err => notificationService.error(err.message));
    }, []);

    async function deleteCustomer() {
        try {
            const ok = window.confirm("Are you sure?");
            if (!ok) return;
            await adminService.deleteCustomer(customer.id);
            alert("Customer has been deleted!");
            navigate("/home");

        } catch (err: any) {
            notificationService.error(err);
        }
    }



    return (
        <div className="CustomerDetails Box">
            {
                customer &&
                <>

                    <h3>Last Name: {customer.firstName} </h3>
                    <h3>First Name: {customer.lastName} </h3>
                    <h3>Id: {customer.id}</h3>
                    <h3>Email: {customer.email}</h3>

                    <br />
                    <br />

                    <NavLink to="/admin/allCustomers" className="Button">Back</NavLink>
                    {
                        authStore.getState().token &&
                        <>
                            <span> | </span>
                            <NavLink to={"/admin/updateCustomer/" + customer.id} className="Button"> update </NavLink>
                            <span> | </span>
                            <NavLink to="" onClick={deleteCustomer} className="Button">Delete</NavLink>
                        </>
                    }

                </>
            }
        </div>
    );
}

export default CustomerDetails;
