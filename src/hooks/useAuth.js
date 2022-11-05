import { useContext } from "react";
import { Context } from "../context/UserAuthContext";

const useAuth = () => {
  const { token, setToken, handleAuthLogin, handleAuthRegister } =
    useContext(Context);
  return {
    token,
    setToken,
    handleAuthLogin,
    handleAuthRegister,
  };
};

export default useAuth;
