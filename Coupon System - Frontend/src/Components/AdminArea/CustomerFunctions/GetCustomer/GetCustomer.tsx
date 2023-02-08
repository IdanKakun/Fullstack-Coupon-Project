import { CustomerModel } from "../../../../Models/BaseUserModel";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import "./GetCustomer.css";

function GetCustomer(): JSX.Element {

    function getHandel(): number {
        const input = document.getElementById("customerId") as HTMLInputElement | null;
        const customerId = (+input.value);
        return customerId;
    }

    async function send(): Promise<CustomerModel> {
        try {
            const customerId = getHandel();
            const customer = await adminService.getCustomer(customerId);
            notificationService.success(`Customer ${customer.firstName} ` + ` ${customer.lastName} has been geted`);
            return customer;
        }

        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="GetCustomer">
        </div>
    );






















    return (
        <div className="GetCustomer">

        </div>
    );
}

export default GetCustomer;
