import { useState, useEffect } from "react";
import { CompanyModel } from "../../../../Models/BaseUserModel";
import adminService from "../../../../Services/AdminService";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./CompaniesList.css";

function CompaniesList(): JSX.Element {

    const [companies, setCompanies] = useState<CompanyModel[]>([]);

    useEffect(() => {

        async function getCompanies() {
            const companies = await adminService.getAllCompanies();
            setCompanies(companies);
        }
        getCompanies();
    }, [])

    return (
        <div className="CompaniesList">
            {companies.map(c => <CompanyCard key={c.id} company={c} />)}
        </div>
    );
}

export default CompaniesList;
