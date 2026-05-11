import axios from "axios";
import { useState } from "react";

const url = "http://localhost/smart_green_api/";
export const useAddition = () => {
  const [addError, setError] = useState(null);
  const add = async (endPoint, payload) => {
    try {
      const res = await axios.post(url + endPoint, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        console.log(res.data);
      } else {
        setError(res.data);
      }
    } catch (error) {
      console.log(error.message);
      setError(error);
    }
  };
  return { add, addError };
};
