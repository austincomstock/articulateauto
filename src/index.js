import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import "./index.css";
import App from "./App";
import { Top } from "./components/Top/Top";
import { About } from "./components/About/About";
import { Protection } from "./pages/Protection/Protection";
import { Toyota } from "./pages/Toyota/Toyota";
import { Ford } from "./pages/Ford/Ford";
import { Cheverolet } from "./pages/Chevrolet/Cheverolet";
import reportWebVitals from "./reportWebVitals";

// REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="top" element={<Top />} />
          <Route path="about" element={<About />} />
          <Route path="protection" element={<Protection />} />
          <Route path="toyota" element={<Toyota />} />
          <Route path="ford" element={<Ford />} />
          <Route path="chevrolet" element={<Cheverolet />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
