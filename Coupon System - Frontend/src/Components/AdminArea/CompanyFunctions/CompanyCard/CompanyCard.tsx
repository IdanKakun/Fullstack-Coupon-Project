import { NavLink } from "react-router-dom";
import { CompanyModel } from "../../../../Models/BaseUserModel";
import appConfig from "../../../../Utils/Config";
import "./CompanyCard.css";

interface CompanyCardProps {
    company: CompanyModel;
}

function CompanyCard(props: CompanyCardProps): JSX.Element {

    return (
        <div className="CompanyCard Box">

            <div>
                {props.company.name} <br />
                Id: {props.company.id} <br />
                Email: {props.company.email}

            </div>

            <div>
                <NavLink to={"/admin/companies/details/" + props.company.id}>
                    <img src={appConfig.companyImagesUrl} />
                </NavLink>
            </div>
        </div >
    );

}

export default CompanyCard;
