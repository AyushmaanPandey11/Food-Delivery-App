import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import  Error  from "./src/components/Error";
import  About from "./src/components/About"; 
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"; 
// main div tag 
const AppLayout = () =>
{
    return (
        <div className="app">
            <Header/>
            <Outlet />
        </div>
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
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />,
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
