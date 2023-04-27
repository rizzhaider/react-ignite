import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store";
import Header from "../Header";


test("Logo should load on rendering header ", () => {
    const header = render(
    <StaticRouter>
        <Provider store={store}>
        <Header />
    </Provider>
    </StaticRouter>
    );

   

    const logo = header.getByTestId("logo");
    expect(logo.src).toBe("http://localhost/dummy.png");
});

test("check user is online", () => {
    const header = render(
    <StaticRouter>
        <Provider store={store}>
        <Header />
    </Provider>
    </StaticRouter>
    );

    const userOnline = header.getByTestId("userOnline");
    expect(userOnline.innerHTML).toBe("🟢")
});

test("cart should have 0 item", () => {
    const header = render(
    <StaticRouter>
        <Provider store={store}>
        <Header />
    </Provider>
    </StaticRouter>
    );

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 0 items")
});