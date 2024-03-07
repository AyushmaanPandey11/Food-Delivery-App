import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import Header from "../../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it( "Checking The connection of Header items to the redux store", () => {
    render(
        
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
        
    );
    const loginbtn = screen.getByRole("button");
    expect(loginbtn).toBeInTheDocument();
} )


it("checking login and logout option in the head button ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);
    fireEvent.click(loginButton);

    const logoutButton = screen.getByText("Logout");

    expect(logoutButton).toBeInTheDocument();

});

it("Checking the cart with cart items 0", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cart = screen.getByText("Cart -(0 items)");
    expect(cart).toBeInTheDocument();
});

it("Checking the Online Status in the header section", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    // Assuming the online status is displayed as text within the list item
    const onlineStatus = screen.getByText(/Online Status: (✔️|❌)/); // Using a regex to match the text
    expect(onlineStatus).toBeInTheDocument();
});
