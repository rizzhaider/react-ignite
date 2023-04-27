import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter} from "react-router-dom/server"
import { Provider } from "react-redux";

import RestaruntMenu from "../RestaurantMenu";
import store from "../../utils/store";
import { resturantMenu } from "../../mocks/data";
import Header from "../Header";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(resturantMenu)
        }
    })
})

test("Render Shimmer on Resturant menu", async () => {
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaruntMenu />
            </Provider>
        </StaticRouter>

    )
    await waitFor(() => {
        const shimmer = menu.getByTestId('shimmer');
        expect(shimmer.children.length).toBe(10)
    })
    
})

test("Resturant menu should load", async () => {
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaruntMenu />
            </Provider>
        </StaticRouter>

    )
    await waitFor(() => expect(menu.getAllByTestId('add-item-btn')))
    const addItemBtn = menu.getAllByTestId('add-item-btn');
    fireEvent.click(addItemBtn[0]);
    fireEvent.click(addItemBtn[0]);
    const cart = menu.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 2 items")
})