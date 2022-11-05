import { useContext } from "react";
import { Context } from "../context/UserAuthContext";

const useAuth = () => {
  const {
    token,
    setToken,
    handleAuthLogin,
    handleAuthRegister,
    handleAuthLogout,
  } = useContext(Context);
  return {
    token,
    setToken,
    handleAuthLogin,
    handleAuthRegister,
    handleAuthLogout,
  };
};

export default useAuth;
