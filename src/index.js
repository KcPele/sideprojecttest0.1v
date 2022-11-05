import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserAuthContext from "./context/UserAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContext>
        <App />
        <ToastContainer />
      </UserAuthContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
