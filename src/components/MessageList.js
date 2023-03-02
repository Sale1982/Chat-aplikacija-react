import { v4 as uuidv4 } from "uuid";

const MessageList = ({ messages, loggedUser }) => {
  console.log(messages);
  const displayMessage = (message) => {
    const { member, text } = message;
    console.log(member.id);
    console.log(loggedUser.id);
    const myMessage = member.id === loggedUser.id;
    const className = myMessage ? "-me" : "";
    return (
      <li className={`Message-content${className}`} key={uuidv4()}>
        <div className={`Message-header${className}`}>
          <div
            className="Avatar"
            style={{ backgroundColor: loggedUser.color }}
          ></div>
          <div className="Username">{loggedUser.username}</div>
        </div>
        <div className={`Message${className}`}>{text}</div>
        <div className="Timestamp">
          <span>{message.timestamp.hour}</span>:
          <span>{message.timestamp.min}</span>
        </div>
      </li>
    );
  };

  //const classStyle = myMessage ? "me" : "";
  return (
    <div className="MessageList-container">
      <ul className="MessageList">
        {messages.map((message) => {
          return displayMessage(message);
        })}
      </ul>
    </div>
  );
};

export default MessageList;
