import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import RES_DATA from "../mocks/resData.json";
import "@testing-library/jest-dom";

it("It should render Restautrant card with props data", () => {
  render(<RestaurantCard resData={RES_DATA.resData}/>);
  const name = screen.getByText("A2B - Adyar Ananda Bhavan");
  expect(name).toBeInTheDocument();
});