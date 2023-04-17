import React from "react";
import { useSelector } from "react-redux";
import OrderListStyle from "./OrderList.module.css";
import { PriceFormatter } from "../../utils/basic/priceFormatter";

const OrderList = () => {
  const { orders } = useSelector((state: any) => state.orders);

  return (
    <div className={OrderListStyle.Container}>
      <h3>Order List</h3>

      {orders.map((order: any) => (
        <div className={OrderListStyle.Order}>
          <div className={OrderListStyle.OrderSummary}>
            <div>
              <span>Customer Name</span>
              <h3>{order.customerName}</h3>
            </div>
            <div>
              <span>Discount:</span>
              <h4>{order.discount * 100}%</h4>
            </div>
            <div>
              <span>Subtotal:</span>
              <h4>{order.subtotal}</h4>
            </div>
            <div>
              <span>Total:</span>
              <h3>{PriceFormatter(order.total)}</h3>
            </div>
          </div>
          <div className={OrderListStyle.OrderDetail}>
            <p>Products:</p>
            <div className={OrderListStyle.OrderProducts}>
              {order?.products?.map((product: any) => (
                <div>
                  <span>{product.name}</span>
                  <p>{PriceFormatter(product.price)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
