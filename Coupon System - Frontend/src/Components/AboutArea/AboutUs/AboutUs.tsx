import "./AboutUs.css";

function AboutUs(): JSX.Element {
    return (
        <div className="AboutUs">
            <br />
            <h2>About..</h2>

            <div className="about">

                <span>Hello everyone!
                    <br />
                    my name is Idan and I am the system developer.</span>
                <h4>About the system... </h4>

                <span>The system is a coupon management system.
                    <br />
                    The system is built in two parts:
                    <br />
                    On the server side, the system works in cooperation with a database, <br />
                    In which all the information of the system is stored
                    <br />
                    (The users, the coupons and the purchase and sell history).
                    <br />
                    On the client side the system makes accessible the actions that any
                    <br />
                    Type of user in the system can perform and at the end presents the relevant information to each user.
                    <br />
                    <br />
                    For more details you can contact me by leaving details below or at the following interfaces:
                </span>

                <br />
                <label>Email:</label> idankakon1@gmail.com
                <br />
                <label>GitHub:</label> github.com/IdanKakun
                < br />
                <label>LinkedIn:</label> linkedin.com/in/idan-kakon

            </div>

            <div className="contactUs">
            </div>
        </div >
    );
}

export default AboutUs;
