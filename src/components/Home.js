import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

import Hero from "./Hero";

const Home = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let success = location.state?.success;
  const { setToken } = useAuth();
  useEffect(() => {
    let tok = localStorage.getItem("token");
    if (tok) {
      setToken(JSON.parse(tok));
    }
  }, []);

  useEffect(() => {
    if (success) {
      toast.success(success);
      navigate("/", { state: undefined });
    }
  }, []);

  return (
    <div className="text-white ">
      <Hero />
    </div>
  );
};

export default Home;
