import logo from "../img/logo.png";
import { useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import LoginForm from "../components/LoginForm";
import ChatRoom from "./ChatRoom";

const ChatApp = () => {
  const [loggedUser, setLoggedUser] = useState({
    username: "Saša",
    color: "#000000",
    id: "1",
  });
  const [isLogged, setIsLogged] = useState(true);

  const handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoggedUser((loggedUser) => ({ ...loggedUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loggedUser.username) {
      setIsLogged(true);
      setLoggedUser((loggedUser) => ({
        ...loggedUser,
        id: uuidv4(),
        username: _.capitalize(loggedUser.username),
      }));
    } else {
      alert("Morate upisati korisnika");
    }
  };

  return (
    <div className="ChatApp">
      <div className="ChatApp-header">
        <img src={logo} alt="Logo aplikacije Chat_učenje" className="Logo" />
        <h1 className="Main-title">Chat_učenje</h1>
      </div>
      {!isLogged && (
        <LoginForm
          handleUserInput={handleUserInput}
          handleSubmit={handleSubmit}
        />
      )}
      {isLogged && <ChatRoom loggedUser={loggedUser} />}
    </div>
  );
};

export default ChatApp;
