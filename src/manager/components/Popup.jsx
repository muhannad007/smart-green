import { useAddition } from "../hooks/useAddition";
import { useState } from "react";
// import { useGet } from "../hooks/useGet";

const Popup = ({ toggle }) => {
  const [type, setType] = useState("bin");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const { add, addError } = useAddition();

  const handleAdd = () => {
    toggle();
    add(type, lat, lon);
    console.log("Error:", addError);
  };

  return (
    <div className="w-full px-5">
      <form className="">
        <label className="block p-3">Container type</label>
        <select
          className="block p-2 border rounded-lg w-full"
          value={type}
          name="type"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="bin">Bin</option>
          <option value="dumpster">Dumpster</option>
          <option value="wheeled_cart">Wheeled Cart</option>
        </select>
        <label className="block p-3">Location</label>
        <div className="flex">
          <input
            placeholder="lat"
            className="block p-2 border rounded-lg w-full"
            type="text"
            name="lat"
            onChange={(e) => setLat(e.target.value)}
          />
          <input
            placeholder="lon"
            className="block p-2 border rounded-lg w-full"
            type="text"
            name="lon"
            onChange={(e) => setLon(e.target.value)}
          />
        </div>
      </form>
      <button
        onClick={handleAdd}
        className="mt-2 p-3 rounded-lg border border-dashed hover:bg-gray-200 cursor-pointer"
      >
        + Add instance
      </button>
    </div>
  );
};

export default Popup;
