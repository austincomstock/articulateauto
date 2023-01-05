import React from "react";
import "./Cart.css";

export const Cart = () => {
  return (
    <div>
      <h3>Your Shopping Cart</h3>
      <button type="submit">Checkout Now</button>
      <hr></hr>
      <div>
        <table className="CartTable">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Item Total</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ItemCell">Cart Item</td>
              <td className="DescriptionCell">Cart Description</td>
              <td className="PriceCell">Cart Price</td>
              <td className="QuantityCell">Cart Quantity</td>
              <td className="ItemTotalCell">Cart Item Total</td>
              <td className="SavingsCell">Cart Savings</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr></hr>
      <h5>Shipping Options</h5>
    </div>
  );
};
