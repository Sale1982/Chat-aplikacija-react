import { useState, useEffect } from "react";
import MessageList from "../components/MessageList";

const ChatRoom = ({ loggedUser }) => {
  const [messages, setMessage] = useState([
    {
      text: "Testna poruka Testna poruka Testna poruka Testna poruka Testna poruka",
      timestamp: {
        hour: "20",
        min: "20",
      },
      member: {
        name: "Saša",
        color: "#000000",
      },
    },
  ]);

  return (
    <div className="ChatRoom">
      <MessageList messages={messages} loggedUser={loggedUser} />
    </div>
  );
};

export default ChatRoom;
