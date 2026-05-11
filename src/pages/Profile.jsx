import ProfilePicture from "../assets/Default-Profile-Picture.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Profile = ({ name }) => {
  return (
    <>
      <NavBar />
      <div className="text-4xl">
        <div className="flex flex-row justify-between bg-indigo-500">
          <div className="flex items-center text-white text-left px-4 h-auto w-3/4 rounded-lg  m-10">
            <ul className="doctor-profile">
              <li>
                <h1 className="text-6xl roboto-bold">{name}</h1>
              </li>
              <li className="roboto-thin text-sm">{name}</li>
              <li>
                <h2>Plumber</h2>
              </li>
            </ul>
          </div>
          <div className="relative bg-white">
            <div className="w-full h-full absolute opacity-0 transition-opacity duration-500 hover:opacity-100 bg-none">
              <button className="absolute right-10 bottom-10 cursor-pointer bg-indigo-300 rounded-lg px-4 py-1 text-white">
                Change Photo
              </button>
            </div>
            <img src={ProfilePicture} alt="profile" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
