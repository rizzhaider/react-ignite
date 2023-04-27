import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server"
import { restaurantData } from "../../mocks/data";
import store from "../../utils/store";
import Body from "../Body";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(restaurantData);
        }

    })
})

test("Shimmer should load on Home Page", async () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>);
    await waitFor(() => {
        const shimmer = body.getByTestId("shimmer");
        expect(shimmer.children.length).toBe(10)
    })
   
});

test("Search button on Home Page", async () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>);

    await waitFor(() => expect(body.getByTestId("search-btn")));
    const searchBtn = body.getByTestId("search-btn");
    expect(searchBtn.innerHTML).toBe("Search")
});

test("Resturant list should load on Home page", async () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>);

    await waitFor(() => expect(body.getByTestId("search-btn")));
    const resList = body.getByTestId("resList");
    expect(resList.children.length).toBe(15)
});


test("On search button clicked filterd data should shown", async () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>);

    await waitFor(() => expect(body.getByTestId("search-btn")));
    const searchInput = body.getByTestId("search-input");

    fireEvent.change(searchInput, {
        target:{
            value:'food'
        }
    })
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("resList");
    expect(resList.children.length).toBe(1)
});

