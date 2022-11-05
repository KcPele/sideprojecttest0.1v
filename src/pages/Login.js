import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Login = () => {
  let location = useLocation();
  let success = location.state?.success;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { handleAuthLogin } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await handleAuthLogin(username, password);
    if (res.success) {
      navigate("/", {
        state: {
          username,
        },
      });
      setError("");
      setUsername("");
      setPassword("");
    } else {
      console.log(res.error);
      toast.error(res.error);
      setError(res.error);
    }
  };
  return (
    <div className=" h-screen flex justify-center items-center ">
      <div className="w-full max-w-xs  mx-auto ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-orange-400 hover:text-orange-600"
              to="/register"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
