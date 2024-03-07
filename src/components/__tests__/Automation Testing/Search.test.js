import "@testing-library/jest-dom";
import {screen,render, fireEvent} from "@testing-library/react";
import { BrowserRouter, json } from "react-router-dom";
import Body from "../../Body";
import { act } from "react-dom/test-utils";
import mocks from "../mocks/ResListMock.json";
import { WithQuickDelivery, RestaurantCard, QuickDelRestaurant } from "../../Restaurantcard";

global.fetch = jest.fn( () => {
    return Promise.resolve(
        {
            json : () => {
                return Promise.resolve(mocks);
            }
        }
    )
} );

it( "Checking the Working of the Search Option for the Restaurants", async () => {
    await act( async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )    
    }
    );
    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target : { value :  "pizza"  } });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("rescards");
    //console.log(cards);
    expect(cards.length).toBe(3);

} )

it( "Checking the Working of the Reset Option for the Restaurants", async () => {
    await act( async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )    
    }
    );
    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    const resetbtn = screen.getByRole("button", {name:"Home"});
    fireEvent.change(searchInput, { target : { value :  "pizza"  } });
    fireEvent.click(searchBtn);
    const cardsBeforeSearch = screen.getAllByTestId("rescards");
    fireEvent.click(resetbtn);
    const cardsAfterSearch = screen.getAllByTestId("rescards");
    
    expect(resetbtn).toBeInTheDocument();
    expect(cardsBeforeSearch.length).toBe(3);
    expect(cardsAfterSearch.length).toBe(9);

} )

it( "Checking the Working of the Filter option for the Top Rated Restaurants", async () => {
    await act( async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )    
    }
    );
    const homebtn = screen.getByRole("button",{name:"Home"});
    const cardsBeforeFilter = screen.getAllByTestId("rescards");
    const filterbtn = screen.getByRole("button", {name:"Top Rated Restaurants"});
    fireEvent.click(filterbtn);
    const cardsAfterFilter = screen.getAllByTestId("rescards");
    expect(cardsBeforeFilter.length).toBe(9);
    expect(cardsAfterFilter.length).toBe(8);
    expect(homebtn).toBeInTheDocument();

} )