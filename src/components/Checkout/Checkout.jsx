import React from "react";
import "./Checkout.css";

export const Checkout = () => {
  return (
    <div>
      <h3>Checkout</h3>
      <p>
        Required information so we can contact you about your order if needed.
      </p>
      <p>Already have an account? Sign In Here</p>
      <form className="CheckoutForm">
        <label for="email">Email Address:</label>
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
        ></input>
        <hr></hr>
        <label for="phone">Phone Number:</label>
        <input
          type="number"
          placeholder="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
        ></input>
        <hr></hr>
        <input type="button" value="Continue"></input>
      </form>
      <h5>Order Summary</h5>
    </div>
  );
};
