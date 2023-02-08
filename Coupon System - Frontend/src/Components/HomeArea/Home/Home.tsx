import AboutUs from "../../AboutArea/AboutUs/AboutUs";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <AboutUs />
            <ContactUs />
        </div>
    );
}

export default Home;
