import { useState, useEffect, useReducer } from "react";

import MessageList from "../components/MessageList";
import Input from "./Input";

const ChatRoom = ({ loggedUser }) => {
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const drone = new window.Scaledrone("z9fNLDZifzXjXy75", {
      secretKey: "THrzeHBYNfEKghudmduBjeKHOJkX8oUt",
    });
    setDrone(drone);

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
    });
    const room = drone.subscribe("observable-room");
    setRoom(room);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (room) {
      room.on("data", (data) => {
        //messages.push(data);
        setMessages((messages) => [...messages, data]);
      });
    }
  }, [room]);

  const handleMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="ChatRoom">
      <MessageList messages={messages} loggedUser={loggedUser} />
      <Input handleMessage={handleMessage} loggedUser={loggedUser} />
    </div>
  );
};

export default ChatRoom;
