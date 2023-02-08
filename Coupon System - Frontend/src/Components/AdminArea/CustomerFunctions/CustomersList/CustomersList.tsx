import { useState, useEffect } from "react";
import { CompanyModel, CustomerModel } from "../../../../Models/BaseUserModel";
import adminService from "../../../../Services/AdminService";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./CustomersList.css";

function CustomersList(): JSX.Element {
    const [customers, setCustomers] = useState<CustomerModel[]>([]);

    useEffect(() => {

        async function getCustomers() {
            const customers = await adminService.getAllCustomers();
            setCustomers(customers);
        }
        getCustomers();
    }, [])
    return (
        <div className="CustomersList">
            {customers.map(c => <CustomerCard key={c.id} customer={c} />)}

        </div>
    );
}

export default CustomersList;
