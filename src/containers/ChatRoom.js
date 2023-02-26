const ChatRoom = ({ loggedUser }) => {
  console.log("Proslijeđen props chatApp komponenti", loggedUser);
  return <h1>Ušli ste u chat</h1>;
};

export default ChatRoom;
