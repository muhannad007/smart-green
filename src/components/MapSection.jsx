import MapDiv from "./Map";
import Notification from "./side_bar/Notificaion";

const MapSection = () => {
  return (
    <div className="bg-gray-300 flex items-center w-[90%] h-full rounded-lg m-auto">
      <div className="bg-white w-[95%] h-[98%] m-auto rounded-lg">
        <h2 className="text-2xl roboto-bold m-2">Map Tracker</h2>
        <div className="w-[90%] m-auto mt-4 relative bg-white h-50">
          <MapDiv />
        </div>
        <hr className="mt-5" />
        <div className="">
          <Notification title={"Truck number"} text={"Skip2"} />
          <Notification title={"Truck number"} text={"Skip2"} />
          <Notification title={"Truck number"} text={"Skip2"} />
          <Notification title={"Truck number"} text={"Skip2"} />
          <Notification title={"Truck number"} text={"Skip2"} />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
