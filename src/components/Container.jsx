import RadialBar from "../components/RadialBar";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = ({ number, type }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getContainerData = async () => {
      try {
        const res = await axios.post(
          "http://localhost/smart_green_api/getOneSkip.php",
          {
            number: number,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        // console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getContainerData();
  }, []);

  return (
    <div className="w-60 border-b bg-white">
      <div className="info">
        <div className="w-50 m-auto">
          {data && <RadialBar level={data.level} />}
        </div>
        <div className="p-2">
          <h3 className="poppins-black-italic">Waste Container: {number}</h3>
          <h4 className="size poppins-light-italic">{type}</h4>
        </div>
      </div>
    </div>
  );
};

export default Container;
