import React, {useEffect, useState} from "react";
import { ProductItemProp } from "../../models/ProductItemProp.model";
import ProductItemStyle from "./ProductItem.module.css";
import { PriceFormatter } from "../../utils/basic/priceFormatter";
import { limitations } from "../../utils/rules/limitations";

const ProductItem = ({ product, addCart, cart }: ProductItemProp) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(!limitations(cart.products, product))
  }, [cart])

  return (
    <div className={ProductItemStyle.container}>
      <div>
        <h4>{product.name}</h4>
        <p>
          Price:{" "}
          <span className={ProductItemStyle.Price}>
            {PriceFormatter(product.price)}
          </span>
        </p>
      </div>
      <button
      disabled={disabled}
        className={ProductItemStyle.ButtonAdd}
        onClick={() => addCart(product)}
      >
        +
      </button>
    </div>
  );
};

export default ProductItem;
