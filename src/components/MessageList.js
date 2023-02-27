import { v4 as uuidv4 } from "uuid";

const MessageList = ({ messages, loggedUser }) => {
  //const { name, color, id } = loggedUser;

  return (
    <ul className="MessageList">
      {messages.map((message) => {
        return (
          <li className="Message-content" key={uuidv4()}>
            <div className="Message-header">
              <div
                className="Avatar"
                style={{ backgroundColor: message.member.color }}
              ></div>
              <div className="Username">{message.member.name}</div>
            </div>
            <div className="Message">{message.text}</div>
            <div className="Timestamp">
              <span>{message.timestamp.hour}</span>:
              <span>{message.timestamp.min}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MessageList;
