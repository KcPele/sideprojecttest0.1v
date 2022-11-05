import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PlayGame from "./pages/PlayGame";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PlayGame />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
