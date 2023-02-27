import { useState } from "react";
import { getHourMin } from "../services/getHourMin";

const Input = ({ loggedUser }) => {
  const [message, setMessage] = useState({
    text: "",
    timestamp: { ...getHourMin() },
    loggedUser,
  });

  const sendMessageOnEnter = (event) => {
    if (event.key === "Enter") sendMessage();
  };

  const getMessage = (event) => {
    setMessage((message) => ({ ...message, text: event.target.value }));
  };

  const sendMessage = (event) => {
    if (message.text) {
      setMessage((message) => ({
        ...message,
        timestamp: { ...getHourMin() },
        loggedUser,
      }));
      //onSendMessage(message);
      console.log("Prije reseta", message);
    } else {
      alert("Moraš upisati poruku");
    }
  };

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Upiši poruku i pritisni enter ili gumb pošalji"
        className="InputMessage"
        onChange={getMessage}
        onKeyDown={sendMessageOnEnter}
        value={message.text}
      />
      <button onClick={sendMessage} className="Btn-send">
        Pošalji
      </button>
    </div>
  );
};

export default Input;