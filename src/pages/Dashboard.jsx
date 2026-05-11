import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import NavBar from "../components/NavBar";
import RadialBar from "../components/RadialBar";
import SideBar from "../components/side_bar/SideBar";
import MapSection from "../components/MapSection";
import Charts from "../components/Charts";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [toggleSide, setToggleSide] = useState(false);
  const navigate = useNavigate();
  const [not, setNot] = useState(false);

  const toggleSideBar = () => {
    setToggleSide(!toggleSide);
    !toggleSide && setNot(false);
  };

  return (
    <>
      <NavBar toggle={toggleSideBar} not={not} />
      <div className="flex w-full">
        <SideBar toggle={toggleSide} toggleNot={setNot} />
        <div className="bg-gray-50 w-full p-4">
          <div className="grid">
            <div className="col-1 w-[90%] m-auto">
              <div className="">
                <h2 className="text-3xl poppins-semibold">
                  Waste container' level
                </h2>
              </div>
              <hr />
              <div className="grid mt-2 gap-y-2">
                <div className="col-1 bg-white p-2 mr-2 border border-gray-200 rounded-lg">
                  Skip-1
                  <div className="w-50 m-auto">
                    <RadialBar level={50} />
                  </div>
                </div>
                <div className="col-2 bg-white p-2 mr-2 border border-gray-200 rounded-lg">
                  Skip-2
                  <div className="w-50 m-auto">
                    <RadialBar level={100} />
                  </div>
                </div>
                <div className="col-1 bg-white p-2 mr-2 border border-gray-200 rounded-lg">
                  Skip-3
                  <div className="w-50 m-auto">
                    <RadialBar level={35} />
                  </div>
                </div>
                <div className="col-2 bg-white p-2 mr-2 border border-gray-200 rounded-lg">
                  Skip-4
                  <div className="w-50 m-auto">
                    <RadialBar level={0} />
                  </div>
                </div>
              </div>
              <div className="m-auto text-center mt-2">
                <button
                  onClick={() => navigate("/containers")}
                  className="m-auto px-5 py-1 border border-dashed rounded-lg hover:bg-indigo-300 cursor-pointer"
                >
                  Show more
                </button>
              </div>
              <div className="">
                <div className="">
                  <h2 className="font-bold text-3xl mt-3">Sewer Tracker</h2>
                </div>
                <hr className="" />
                <div className="bg-white">
                  <Charts />
                </div>
              </div>
            </div>
            <div className="col-2 w-full">
              <MapSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
