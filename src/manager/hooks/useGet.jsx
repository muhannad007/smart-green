import axios from "axios";
import { useCallback, useState } from "react";

const url = "http://localhost/smart_green_api/";

export const useGet = ({ setData }) => {
  const [error, setError] = useState(null);
  const getAll = useCallback(
    async (endPoint, admin = false) => {
      try {
        const res = await axios.get(url + endPoint);
        admin ? setData(res.data) : setData((prev) => [...prev, ...res.data]);
      } catch (error) {
        setError(error.message);
      }
      // const json = res.json;
    },
    [setData],
  );
  return { getAll, error };
};
