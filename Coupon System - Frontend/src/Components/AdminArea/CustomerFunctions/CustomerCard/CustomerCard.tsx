import { NavLink } from "react-router-dom";
import { CustomerModel } from "../../../../Models/BaseUserModel";
import appConfig from "../../../../Utils/Config";
import "./CustomerCard.css";

interface CustomerCardProps {
    customer: CustomerModel;
}

function CustomerCard(props: CustomerCardProps): JSX.Element {

    return (
        <div className="CustomerCard Box">
            <div>
                {props.customer.firstName} {props.customer.lastName} <br />
                Id: {props.customer.id} <br />
                Email: {props.customer.email}

            </div>

            <div>
                <NavLink to={"/admin/customers/details/" + props.customer.id}>
                    <img src={appConfig.customerImageUrl} />
                </NavLink>
            </div>
        </div>
    );
}

export default CustomerCard;
