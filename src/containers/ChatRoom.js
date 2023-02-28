import { useState, useEffect } from "react";
import MessageList from "../components/MessageList";
import Input from "./Input";

const ChatRoom = ({ loggedUser }) => {
  const [messages, setMessages] = useState([]);

  const handleMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="ChatRoom">
      <MessageList messages={messages} loggedUser={loggedUser} />
      <Input handleMessage={handleMessage} loggedUser={loggedUser} />
    </div>
  );
};

export default ChatRoom;
