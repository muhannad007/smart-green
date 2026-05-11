const Notification = ({ title, text, date }) => {
  // const date = new Date();
  return (
    <div className="w-full p-2 cursor-pointer hover:bg-gray-200 border border-gray-100">
      <h2 className="roboto-bold">{title}</h2>
      <h4 className="text-sm roboto-thin">
        {date}
        {/* {date.toLocaleDateString()} {date.toLocaleTimeString()} */}
      </h4>
      <h3 className="roboto-medium">{text}</h3>
    </div>
  );
};

export default Notification;
