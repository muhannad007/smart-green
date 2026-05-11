import Notification from "./Notificaion";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const SideBar = ({ toggle, toggleNot }) => {
  const [notifications, setNotifications] = useState([]);
  const [arraySize, setArraySize] = useState(0);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const res = await axios.get(
          "http://localhost/smart_green_api/getSkipNotifications.php",
        );
        setNotifications(res.data.reverse());
        if (notifications.length > arraySize) {
          toggleNot(true);
          setArraySize(notifications.length);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNotifications();
  });
  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 400 }}
          exit={{ width: 0 }}
          className={`border border-gray-200 rounded-lg`}
        >
          {notifications &&
            notifications.map((notification) => {
              console.log(notification);
              return (
                <div key={notification.id}>
                  <Notification
                    title={"Container Status: " + notification.skip_level + "%"}
                    date={notification.created_at}
                    text={"skip id: " + notification.skip_id}
                  />
                </div>
              );
            })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
