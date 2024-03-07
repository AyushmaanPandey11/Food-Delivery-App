import "@testing-library/jest-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../../utils/appStore";
import RestaurentMenu from "../../RestaurantMenu";
import Cart from "../../Cart";
import ResMenuMock from "../mocks/mockResMenu.json";
import {act} from "react-dom/test-utils";
import Header from "../../Header"
global.fetch = jest.fn(()=> {
    return Promise.resolve( 
        {
            json : () => {
                return Promise.resolve(ResMenuMock);
            }
        }
     )
})
 
test("Checking the Working of the Cart ", async () => {
    await act ( async () => 
        render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
                <RestaurentMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
        )
    );
    const accordianHeader = screen.getByText("Sharing Combos (18)");
    fireEvent.click(accordianHeader);
    const items = screen.getAllByTestId("foodItems");
    expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();
    const addBtn = screen.getAllByRole("button", { name:"Add +" });
    fireEvent.click(addBtn[0]);
    const ItemsinCart = screen.getByText("Cart -(1 items)");
    expect(ItemsinCart).toBeInTheDocument();
    fireEvent.click(addBtn[4]);
    //expect(screen.getByText("Cart -(2 items)")).toBeInTheDocument();
    expect(items.length).toBe(18);
    expect(accordianHeader).toBeInTheDocument();

});

test("Checking the Working of the Cart ", async () => {
    await act ( async () => 
        render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
                <RestaurentMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
        )
    );
    const accordianHeader = screen.getByText("Sharing Combos (18)");
    fireEvent.click(accordianHeader);
    const items = screen.getAllByTestId("foodItems");
    const addBtn = screen.getAllByRole("button", { name:"Add +" });
    // console.log(addBtn.length); 19 btns
    fireEvent.click(addBtn[0]); // 20
    // //fireEvent.click(accordianHeader);
    // fireEvent.click(addBtn[4]); // 21 
    // expect(addBtn.length).toBe(21);
    fireEvent.click(screen.getByRole("button", {name: "Clear items"}));
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();

});