import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PlayGame from "./pages/PlayGame";
import Register from "./pages/Register";

import { ErrorBoundary } from "react-error-boundary";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="game" element={<PlayGame />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
