import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoadingLogin, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost/smart_green_api/login.php",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(res.data);
      const json = await res.data;

      if (json) {
        localStorage.setItem("user", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
      }

      console.log(json);
    } catch (error) {
      if (error.status === 400) {
        setError("Error in the provided password");
      } else {
        setError(error.message);
        console.log(error.message);
      }
      setIsLoading(false);
    }
  };

  return { login, isLoadingLogin, error };
};
