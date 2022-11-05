import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();
const UserAuthContext = ({ children }) => {
  const [token, setToken] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    let tok = localStorage.getItem("token");
    if (tok) {
      setToken(tok);
    } else {
      navigate("/login");
    }
  }, []);

  const handleAuthLogin = (username, password) => {
    let pass = localStorage.getItem(username);
    if (!pass) return { error: "No user found. Kindly register" };
    if (JSON.parse(pass) === password) {
      localStorage.setItem("token", JSON.stringify(username));
      return { success: "successful" };
    } else {
      return { error: "Wrong credentials please try again" };
    }
  };
  const handleAuthRegister = (username, password) => {
    localStorage.setItem(username, JSON.stringify(password));
    navigate("/login", {
      state: {
        success: "User created successfully",
      },
    });
  };
  return (
    <Context.Provider
      value={{ token, setToken, handleAuthLogin, handleAuthRegister }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserAuthContext;
