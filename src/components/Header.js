import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
// header section 
const Header = () => {
    const [ btn, setbtn ] = useState(["Login"]);
    const OnlineStatus = UseOnlineStatus();
    return (
        <div className="flex justify-between shadow-xl mx-5 md-15">
            <div className="h-25">
                <img className="w-40 bg-transparent" 
                src = {LOGO_URL} alt="logo Not Coming"/>
            </div>
            <div className="flex items-center" >
                <ul className="flex p-4 m-4 font-bold text-lg" >
                    <li className="px-5">Online Status: { OnlineStatus ? "✔️":"❌" }</li>
                    <li className="px-5"><Link to="/Home">Home</Link></li>
                    <li className="px-5"><Link to="/AboutUs" >About Us</Link></li>
                    <li className="px-5"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-5"><Link to="/grocery">Grocery</Link></li>
                    <button className="px-5" onClick={ () => {
                        btn === "Login" ? setbtn("Logout") : setbtn("Login");
                    }} >{btn}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;