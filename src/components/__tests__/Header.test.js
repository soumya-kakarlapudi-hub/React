import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("Should load the Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
   </BrowserRouter>
  );
  // If there are multiple buttons - pass in extra params
  const loginButton = screen.getByRole("button", {name: "Login"});
  //const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();

});

it("Should load the Header Component with Cart items 0 ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </Provider>
  );
  
  const loginButton = screen.getByText("Cart (0 items)");
  expect(loginButton).toBeInTheDocument();

});

it("Should load the Header Component with Cart item", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </Provider>
  );
  
  const loginButton = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();

});

it("Should change login button to logout on click", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </Provider>
  );
  
  const loginButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name: "Logout"});
  expect(logoutButton).toBeInTheDocument();

});