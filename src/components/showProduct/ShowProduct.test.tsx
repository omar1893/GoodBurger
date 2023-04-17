import { render } from "@testing-library/react";
import ShowProduct from "./ShowProduct";

describe("ShowProduct component", () => {
  it("should match snapshot", () => {
    const product = {
      name: "Product 1",
      price: 9.99,
      type: "SANDWICH"
    };
    const { asFragment } = render(<ShowProduct product={product} />);
    expect(asFragment()).toMatchSnapshot();
  });
});