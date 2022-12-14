import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//COMPONENTS
import { Top } from "./components/Top/Top";
import { About } from "./components/About/About";

//PAGES
import { Protection } from "./pages/Protection/Protection";
import { Toyota } from "./pages/Toyota/Toyota";
import { Tacoma } from "./pages/Toyota/Tacoma/Tacoma";
import { Ford } from "./pages/Ford/Ford";
import { Chevrolet } from "./pages/Chevrolet/Chevrolet";

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
          <Route path="tacoma" element={<Tacoma />} />
          <Route path="ford" element={<Ford />} />
          <Route path="chevrolet" element={<Chevrolet />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
