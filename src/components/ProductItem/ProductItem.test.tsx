import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ProductItem from "./ProductItem";

describe("ProductItem component", () => {
  const product = {
    name: "Cheeseburger",
    price: 7.99,
    type: "SANDWICH",
  };

  const cart = {
    products: [],
  };

  const addCart = jest.fn();

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ProductItem product={product} cart={cart} addCart={addCart} />);
  });

  afterEach(cleanup)

  test("renders product name and price correctly", () => {
    const productName = screen.getByText(product.name);
    expect(productName).toBeInTheDocument();

    const productPrice = screen.getByText(`$${product.price.toFixed(2)}`);
    expect(productPrice).toBeInTheDocument();
  });

  test("clicking the add button calls addCart function", () => {
    const addButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(addButton);

    expect(addCart).toHaveBeenCalledTimes(1);
    expect(addCart).toHaveBeenCalledWith(product);
  });

  test("disabled button is rendered correctly based on cart products", () => {
    const cart = {
      products: [{ id: 1, name: "Cheeseburger", price: 7.99 }],
      total: 7.99,
    };
    render(<ProductItem product={product} cart={cart} addCart={addCart} />);
  
    const addButtons = screen.queryAllByRole("button", { name: "+" });
  
    expect(addButtons).toHaveLength(2);
  
    expect(addButtons[1]).toBeDisabled();
  });
});
