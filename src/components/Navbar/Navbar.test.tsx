import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

test("renders the navbar", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const navbarTitle = screen.getByText("Good Burger");
  const productListLink = screen.getByText("Product List");
  const ordersHistoryLink = screen.getByText("Orders History");
  expect(navbarTitle).toBeInTheDocument();
  expect(productListLink).toBeInTheDocument();
  expect(ordersHistoryLink).toBeInTheDocument();
});

test("navigates to the correct page when link is clicked", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const linkElement = screen.getByText(/Orders History/i);
    userEvent.click(linkElement);
  });

  expect(window.location.pathname).toBe("/orders");
});
