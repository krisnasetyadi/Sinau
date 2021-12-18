/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/index";
import Homes from "../pages/home";

describe("Homes", () => {

  it("Renders navbar", () => {
    render(<Home />);

    const heading = screen.getByText("Sinau.id");

    expect(heading).toBeInTheDocument();
  });

  it("Renders hero section", () => {
    render(<Home />);

    const text = screen.getByText("KNOWLEDGE ISNT POWER UNTIL IT IS APPLIED");

    expect(text).toBeInTheDocument();
  });

  

  it("Renders Lets Start Budi", () => {
    render(<Homes />);

    const text = screen.getByText("Lets Start Learning, Budi");

    expect(text).toBeInTheDocument();
  });


  describe("Darkmode", () => {
    it("Renders white mode initially", async () => {
      render(<Home />);

      const navbar = screen.getByTestId("navbar-home");
      const buttonLight = screen.getByTestId("navbar-undefined");
      expect(navbar).toBeInTheDocument();

      await waitFor(() => {
        expect(buttonLight).toBeInTheDocument();
      });
    });
  });


});


// components folder
/*
describe("component/", () => {

})
*/