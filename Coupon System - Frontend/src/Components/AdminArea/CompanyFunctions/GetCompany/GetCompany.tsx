import { CompanyModel } from "../../../../Models/BaseUserModel";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import "./GetCompany.css";

function GetCompany(): JSX.Element {

    function getHandel(): number {
        const input = document.getElementById("companyId") as HTMLInputElement | null;
        const companyId = (+input.value);
        return companyId;
    }

    async function send(): Promise<CompanyModel> {
        try {
            const companyId = getHandel();
            const company = await adminService.getCompany(companyId);
            notificationService.success(`Company ${company.name} has been geted`);
            return company;
        }

        catch (err: any) {
            notificationService.error(err);
        }
    }

    return (
        <div className="GetCompany">

        </div>
    );
}

export default GetCompany;
