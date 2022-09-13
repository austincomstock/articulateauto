import React from "react";
import "./Register.css";

export const Register = () => {
  return (
    <div id="Register1">
      <h3 className="RegisterH3">Register</h3>
      {/* FORM */}
      <form id="RegisterForm" method="GET">
        <label className="RegisterLabel">
          First Name: <input type="text" name="firstname" />
        </label>
        <label className="RegisterLabel">
          Last Name: <input type="text" name="lastname" />
        </label>
        <label className="RegisterLabel">
          Email: <input type="email" name="email" required />
        </label>
        <label className="RegisterLabel">
          Password: <input type="password" name="password" minlength="5" />
        </label>
        {/* <label className="RegisterLabel">
          Birthday: <input type="date" name="birthday" />
        </label> */}
        {/* <label className="RegisterLabel">
          Gender: <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
          <input type="radio" name="gender" value="other" />
          Other
        </label> */}
        {/* <label className="RegisterLabel">
          Pets: <input type="checkbox" name="cat" /> Cat
          <input type="checkbox" name="dog" /> Dog
        </label> */}
        <label className="RegisterLabel">
          Vehicle:{" "}
          <select name="vehicle">
            <option value="SelectVehicle" name="selectvehicle">
              Select Vehicle
            </option>
            <option value="Toyota" name="toyota">
              Toyota
            </option>
            <option value="Ford" name="ford">
              Ford
            </option>
            <option value="Chevrolet" name="chevrolet">
              Chevrolet
            </option>
            <option value="GMC" name="gmc">
              GMC
            </option>
            <option value="Ram" name="ram">
              Ram
            </option>
          </select>
        </label>
        <label className="RegisterLabel">
          <input
            type="submit"
            value="Register"
            className="RegisterInputSubmit"
          />
        </label>
        <label className="RegisterLabel">
          <input
            type="submit"
            value="Sign In"
            className="RegisterInputSubmit"
          />
        </label>
      </form>
    </div>
  );
};
