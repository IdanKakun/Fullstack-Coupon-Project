import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CompanyModel } from "../../../../Models/BaseUserModel";
import { authStore } from "../../../../Redux/AuthState";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import "./CompanyDetails.css";

function CompanyDetials(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const id = +params.prodId;

    const [company, setCompany] = useState<CompanyModel>();

    useEffect(() => {
        adminService.getCompany(id)
            .then(company => setCompany(company))
            .catch(err => notificationService.error(err.message));
    }, []);

    async function deleteCompany() {
        try {
            const ok = window.confirm("Are you sure?");
            if (!ok) return;
            await adminService.deleteCompany(company.id);
            alert("Company has been deleted!");
            navigate("/home");

        } catch (err: any) {
            notificationService.error(err);
        }
    }


    return (
        <div className="CompanyDetials Box">
            {
                company &&
                <>

                    <h3>Name: {company.name}</h3>
                    <h3>Id: {company.id}</h3>
                    <h3>Email: {company.email}</h3>

                    <br />
                    <br />

                    <NavLink to="/admin/allCompanies" className="Button">Back</NavLink>
                    {
                        authStore.getState().token &&
                        <>
                            <span> | </span>
                            <NavLink to={"/admin/updateCompany/" + company.id} className="Button"> update </NavLink>
                            <span> | </span>
                            <NavLink to="" onClick={deleteCompany} className="Button">Delete</NavLink>
                        </>
                    }

                </>
            }

        </div>
    );
}

export default CompanyDetials;
