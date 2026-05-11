import Container from "../components/Container";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Footer from "../components/Footer";

const Containers = () => {
  const [containers, setContainers] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const getAllContainers = async () => {
      try {
        const res = await axios.get(
          "http://localhost/smart_green_api/getSkips.php",
        );
        setContainers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (user) {
      getAllContainers();
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-full h-screen m-auto bg-gray-100 pt-5">
        <h1 className="roboto-bold text-4xl text-center pb-3">
          Waste Containers
        </h1>
        <hr className="w-1/2 m-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-10">
          {containers &&
            containers.map((container) => {
              return (
                <div key={container.id} className="m-auto">
                  <Container number={container.id} type={container.type} />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Containers;
