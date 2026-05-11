import { Mail, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-center bg-gray-950 py-10">
      <h2 className="text-white mb-2 roboto-medium text-2xl">Contact us</h2>
      <div className="">
        <button className="p-2 mx-2 bg-gray-200 rounded-full">
          <Facebook className="text-gray-700 hover:text-white" size={24} />
        </button>
        <button className="p-2 mx-2 bg-gray-200 rounded-full">
          <Twitter className="text-gray-700 hover:text-white" size={24} />
        </button>
        <button className="p-2 mx-2 bg-gray-200 rounded-full">
          <Mail className="text-gray-700 hover:text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
