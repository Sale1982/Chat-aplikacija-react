import { v4 as uuidv4 } from "uuid";

const MessageList = ({ messages, loggedUser }) => {
  return (
    <div className="MessageList-container">
      <ul className="MessageList">
        {messages.map((message) => {
          const keyId = uuidv4();
          return (
            <li className="Message-content-me" key={keyId}>
              <div className="Message-header-me">
                <div
                  className="Avatar"
                  style={{ backgroundColor: message.loggedUser.color }}
                ></div>
                <div className="Username">{message.loggedUser.username}</div>
              </div>
              <div className="Message-me">{message.text}</div>
              <div className="Timestamp">
                <span>{message.timestamp.hour}</span>:
                <span>{message.timestamp.min}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MessageList;
