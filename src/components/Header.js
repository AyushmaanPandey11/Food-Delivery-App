import { LOGO_URL } from "../utils/constants";
// header section 
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src = {LOGO_URL} alt="logo Not Coming"/>
            </div>
            <div className="Nav-Bar" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;