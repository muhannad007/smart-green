import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  // const navigate = useNavigate();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost/smart_green_api/signup.php",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const json = await res.data;

      if (json) {
        // save the user to local staorage
        // localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        // dispatch({ type: "LOGIN", payload: json });
        // console.log("ffffffffffff");
        setIsLoading(false);
        // console.log(isLoading);
      }

      console.log(json);
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        setError("Incorrect password");
      } else {
        setError(error.message);
      }
      // setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  return { signup, isLoading, error };
};
