import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowProduct } from "../../components/showProduct";
import { Product } from "../../models/Product.model";
import { ADD_ORDER } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import CreateOrderStyles from "./CreateOrder.module.css";
import { PriceFormatter } from "../../utils/basic/priceFormatter";

const CreateOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const currentCart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createOrder = () => {
    if (customerName.length > 2) {
      dispatch({
        type: ADD_ORDER,
        payload: { customerName, ...currentCart.cart },
      });
      navigate("/orders");
    }
  };

  return (
    <div className={CreateOrderStyles.Container}>
      <h2>Create Order</h2>

      <div className="form-group">
        <span>Customer Name:</span>
        <input className="form-field" type="text" placeholder="E.G: John Doe" onChange={(event) => setCustomerName(event.target.value)}/>
      </div>

      <div className={CreateOrderStyles.ProductContainer}>
        {currentCart?.cart.products.map((product: Product) => (
          <ShowProduct product={product} />
        ))}
      </div>

      <div className={CreateOrderStyles.Summary}>
        <p>
          Subtotal: <span>{ PriceFormatter(currentCart?.cart?.subtotal)}</span>
        </p>
        <p>
          Discount: <span>{currentCart?.cart?.discount * 100}%</span>
        </p>
        <p>
          Total: <span>{PriceFormatter(currentCart?.cart?.total)}</span>
        </p>
      </div>

      <button disabled={customerName.length < 2} className="formAction" onClick={() => createOrder()}>Create Order</button>
    </div>
  );
};

export default CreateOrder;
