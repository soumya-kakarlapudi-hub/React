import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Test Cases for contact page", ()=> {

  it("Should load contact page", () => {
    render(<Contact/>);
  });

  it("Should load the Heading of contact page", () => {
    render(<Contact/>);
    const heading = screen.getByText("This is my contact page");
    expect(heading).toBeInTheDocument();
  });

  it("Should load the input boxes of contact page", () => {
    render(<Contact/>);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
  });

});




