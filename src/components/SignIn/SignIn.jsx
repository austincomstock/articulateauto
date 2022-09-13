import React from "react";
import "./SignIn.css";

export const SignIn = () => {
  return (
    <div id="SignIn1">
      <h3 className="SignInH3">SignIn</h3>
      {/* FORM */}
      <form id="SignInForm" method="GET">
        <label className="SignInLabel">
          First Name: <input type="text" name="firstname" />
        </label>
        <label className="SignInLabel">
          Last Name: <input type="text" name="lastname" />
        </label>
        <label className="SignInLabel">
          Email: <input type="email" name="email" required />
        </label>
        <label className="SignInLabel">
          Password: <input type="password" name="password" minlength="5" />
        </label>
        <label className="SignInLabel">
          <input type="submit" value="Sign In" />
        </label>
        <label className="SignInLabel">
          <input type="submit" value="Register" />
        </label>
      </form>
    </div>
  );
};
