import { Link } from "react-router-dom";
import Profile from "../assets/profile_picture.jpg";
import { Sidebar, BellIcon, Bell, LogOut } from "lucide-react";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = ({ toggle, not }) => {
  const { user, dispatch } = useAuthContext();

  console.log(user);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <nav className="z-40 relative h-14 flex flex-row justify-between bg-white text-black border border-gray-200">
      <ul className="flex flex-row justify-between">
        <button
          onClick={toggle}
          className="relative hover:bg-indigo-100 py-4 px-2 cursor-pointer border border-gray-200 w-12"
        >
          <BellIcon>
            {/* <svg className="" height="18" width="18"> */}
            {not && <circle cx="5" cy="5" r="5" stroke="red" fill="red" />}
            {/* </svg> */}
          </BellIcon>
        </button>
        <li className=" hover:bg-indigo-100 py-4 px-2 cursor-pointer">
          <Link to="/">Dashboard</Link>
        </li>
        <li className=" hover:bg-indigo-100 py-4 px-2 cursor-pointer">
          <Link to="/world">World</Link>
        </li>
        <li className="hover:bg-indigo-100 py-4 px-2 cursor-pointer">
          Contact
        </li>
        <li className="hover:bg-indigo-100 py-4 px-2 cursor-pointer">
          <Link to="/profile">About</Link>
        </li>
      </ul>
      <div className="flex">
        <span className="hover:bg-indigo-100 py-4 px-4 cursor-pointer">
          <Link to={`/profile/${user.id}`}>{user.name}</Link>
        </span>
        <div>
          <button
            onClick={handleLogout}
            className="px-4 py-3 text-2xl hover:bg-indigo-100"
          >
            <LogOut />
          </button>
        </div>
        <div className="ml-2 mr-5">
          <Link to={`/profile/${user.id}`}>
            <img
              className="rounded-full border-2 border-indigo-500"
              width="70"
              src={Profile}
              alt="profile_picture"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
