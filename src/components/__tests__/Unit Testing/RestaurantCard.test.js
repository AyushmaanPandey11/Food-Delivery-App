import RestaurantCard, { WithQuickDelivery } from "../../Restaurantcard";
import "@testing-library/jest-dom";
import {screen,render} from "@testing-library/react";
import { mock } from "../../../utils/mockData";

it( "Checking the Working of the Restaurant Card in the page ", () => {
    render(
        <RestaurantCard resdata={mock[0]}/>
    );
    const name = screen.getByText("The Red Box");
    expect(name).toBeInTheDocument();
} );

it("Testing the High Order Components for using RestaurantCard", () => {
    const QuickDelRestaurant = WithQuickDelivery(RestaurantCard);
    render(<QuickDelRestaurant  resdata={mock[0]} />);
    const label = screen.getByText("Fast delivery");
    expect(label).toBeInTheDocument();
});