import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// header section 
const Header = () => {
    const [ btn, setbtn ] = useState(["Login"]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src = {LOGO_URL} alt="logo Not Coming"/>
            </div>
            <div className="Nav-Bar" >
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/AboutUs" >About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <button className="login-btn" onClick={ () => {
                        btn === "Login" ? setbtn("Logout") : setbtn("Login");
                    }} >{btn}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;