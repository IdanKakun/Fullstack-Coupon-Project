import { NavLink } from "react-router-dom";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">

            <NavLink to="/home">🏠</NavLink>

            <AuthMenu />

            <h1>Coupon System</h1>

        </div>
    );
}

export default Header;
