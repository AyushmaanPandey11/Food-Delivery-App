import React from "react";
import ReactDOM from "react-dom/client";

// header section 
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="applogo.jpg" alt="logo" />
            </div>
            <div className="Nav-Bar" >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// main div tag 
const AppLayout = () =>
{
    return (
        <div className="app">
            <Header/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
