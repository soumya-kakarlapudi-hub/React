import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../mocks/resCardData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should load Restaurant Card Menu", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    );
  });
  const cardsBeforeSearch = screen.getByText("Items starting at 99 (6)");
  expect(cardsBeforeSearch).toBeInTheDocument();
});

it("Should expand the the list of items on click and update Cart items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    );
  });
  const cardCategory = screen.getByText("Recommended (20)");
  fireEvent.click(cardCategory);
  const addItems = screen.getAllByText("Add +");
  fireEvent.click(addItems[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
});

it("Should update Cart items on another item", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    );
  });
  const cardCategory = screen.getByText("Bagara Pulav Meals (2)");
  fireEvent.click(cardCategory);
  const addMoreItems = screen.getAllByText("Add +");
  fireEvent.click(addMoreItems[0]);
  fireEvent.click(addMoreItems[1]);
  expect(screen.getByText("Cart (3 items)")).toBeInTheDocument();
});

it("Should show updated items on Cart page", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>,
    );
  });
  
  expect(screen.getByText("Cart")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(3);
  
});

it("Should clear the Cart on clear cart button click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>,
    );
  });
  
  const clearCart= screen.getByRole("button", {name:"Clear Cart"});
  fireEvent.click(clearCart);
  expect(screen.getByText("Oops! Your cart is empty. Add items to the card")).toBeInTheDocument();
});

