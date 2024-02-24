import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import  Error  from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { lazy,Suspense } from "react";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
const Grocery = lazy( () => import("./src/components/Grocery") );
const About = lazy( () => import("./src/components/About") );
// main div tag 
const AppLayout = () =>
{
    const [userName,setUserName]=useState();
    useEffect(() => {
        const data = {
            name: "Pandey"
        };
        setUserName(data.name);
    },[]);
    return (
        <UserContext.Provider value={ {LoggedInUser : userName, setUserName} } >
        <div className="app">
            <Header/>
            <Outlet />
        </div>
        </UserContext.Provider>
    );
};
const AppRouter = createBrowserRouter( [
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/" ,
                element: <Body />,
                errorElement: <Error />,
            },
            {
                path: "/Home" ,
                element: <Body />,
                errorElement: <Error />,
            },
            {
                path: "/AboutUs",
                element: <Suspense fallback={<Shimmer/>}> <About /> </Suspense>,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />,
            },
            {
                path: "/grocery",
                element : <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element : <RestaurantMenu />
            },
        ],
        errorElement: <Error />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
