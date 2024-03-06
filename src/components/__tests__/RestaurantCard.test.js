import RestaurantCard from "../Restaurantcard";
import "@testing-library/jest-dom";
import {screen,render} from "@testing-library/react";
import { mock } from "../../utils/mockData";
import { CDN_URL } from "../../utils/constants";

test( "Checking the Working of the Restaurant Card in the page ", () => {
    render(
        <RestaurantCard resdata={mock}/>
    );
    const name = screen.getByText("The Red Box");
    expect(name).toBeInTheDocument();
} )