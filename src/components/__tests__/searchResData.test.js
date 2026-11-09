import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should search Res List for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  
  const searchInput = screen.getByTestId("searchInput");
  
  fireEvent.change(searchInput, { target: { value: "burger" } });
  
  fireEvent.click(searchBtn);
  
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  
  expect(cardsAfterSearch.length).toBe(4);
});

it("Should filter my top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });
  const cardsBeforefilter = screen.getAllByTestId("resCard");
  expect(cardsBeforefilter.length).toBe(20);
  const topRatedRes = screen.getByRole("button", { name: "Top Rated restaurants" });
  fireEvent.click(topRatedRes);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(14);
});