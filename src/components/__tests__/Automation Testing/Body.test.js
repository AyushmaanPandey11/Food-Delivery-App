import "@testing-library/jest-dom";
import {screen,render} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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

it( " Checking the Working Components of Body page ", async () => {
    //const QuickDelRestaurant = WithQuickDelivery(RestaurantCard);
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const filterandSearch = screen.getByTestId("srchAndFilter");
    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    const card = screen.getByRole("heading", {name:"Restaurants Nearby.."});
    const rescards = screen.getAllByTestId("rescards");
    const carousel = screen.getAllByTestId("carousel");
    expect(searchBtn).toBeInTheDocument();
    expect(filterandSearch).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(card).toBeInTheDocument();
    expect(rescards.length).toBe(9);
    expect(carousel.length).toBe(18);
});
