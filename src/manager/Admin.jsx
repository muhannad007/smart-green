import { useGet } from "./hooks/useGet";
import { useState, useEffect } from "react";
import { Truck, Trash2, User, Droplet } from "lucide-react";

import Popup from "./components/Popup";

const Admin = () => {
  const [data, setData] = useState([]);
  const { getAll, error } = useGet({ setData });
  const [endPoint, setEndPoint] = useState(null);
  const [popupOpacity, setPopupOpacity] = useState(0);

  useEffect(() => {
    getAll("getSkips.php", 1);
  }, [getAll]);

  const togglePopup = () => setPopupOpacity(!popupOpacity);

  return (
    <>
      <div
        className={`${popupOpacity ? "opacity-25" : "opacity-100"} bg-gray-100 h-screen`}
      >
        <div className="flex justify-between w-[80%] m-auto border-b border-gray-400 pb-4">
          <div className="w-50 h-50 border flex flex-col items-center bg-white cursor-pointer hover:bg-gray-100">
            <User className="m-auto" size={70} />
            <h2 className="font-bold">Users</h2>
          </div>
          <div className="w-50 h-50 border flex flex-col items-center bg-white cursor-pointer hover:bg-gray-100">
            <Trash2 className="m-auto" size={70} />
            <h2 className="font-bold">Containers</h2>
          </div>
          <div className="w-50 h-50 border flex flex-col items-center bg-white cursor-pointer hover:bg-gray-100">
            <Truck className="m-auto" size={70} />
            <h2 className="font-bold">Trucks</h2>
          </div>
          <div className="w-50 h-50 border flex flex-col items-center bg-white cursor-pointer hover:bg-gray-100">
            <Droplet className="m-auto" size={70} />
            <h2 className="font-bold">Sewer Points</h2>
          </div>
        </div>
        <div className="bg-white mt-4">
          <ul>
            {data ? (
              data.map((instance) => {
                return (
                  <li
                    key={instance.id}
                    className="p-3 border-b w-[80%] m-auto cursor-pointer hover:bg-gray-200"
                  >
                    instance
                    {/* {instance["0"]} */}
                  </li>
                );
              })
            ) : (
              <div>{error}</div>
            )}
          </ul>
          <div className="flex items-center my-4">
            <button
              onClick={togglePopup}
              className="p-3 rounded-lg border border-dashed hover:bg-gray-200 cursor-pointer m-auto"
            >
              + Add instance
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${!popupOpacity ? "opacity-0 invisible" : "opacity-100 visible"} bg-white border rounded-lg border-gray-200 h-100 m-auto w-100 fixed inset-0 z-50 flex items-center justify-center`}
      >
        <Popup toggle={togglePopup} />
      </div>
    </>
  );
};

export default Admin;
