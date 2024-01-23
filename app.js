import React from "react";
import ReactDOM from "react-dom/client";

// header section 
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" alt="logo Not Coming"/>
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

const Restaurentcard = (prop) => {
    return (

        <div className="res-card" >
            <img className="res-logo" alt="restaurent logo" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sbDbh1CFfkBLFCL2XWW2M84Elff1wX40a-koRbhKEA&s"/> 
            <h3>{prop.resname}</h3>
            <h4>{prop.cuisine}</h4>
            <h4>Rating: {prop.rating}</h4>
            <h4>Time: {prop.deliverytime}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body" >
            <div className="search" >Search Bar</div>
            <div className="res-container" >
                <Restaurentcard resname="Noodle House" cuisine="North-East, Momos,Fried Rice" rating="4.9" deliverytime="40 mins" />
                <Restaurentcard resname="Sangrila" cuisine="North-East, Momos,Fried Rice" rating="5.0" deliverytime="30 mins"/>
                <Restaurentcard/>
                <Restaurentcard/>
                <Restaurentcard/>
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
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
