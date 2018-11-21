const io = require("../server.js").io;

const { VERIFY_USER, USER_CONNECTED, MESSAGE_SENT, LOGOUT } = require("../../client/src/components/Chat/Events");
const { createUser, createMessage, createChat } = require("./Factories");
let connectedUsers = {};

module.exports = function(socket) {
  console.log("Socket ID: " + socket.id);

  //check username
  socket.on(VERIFY_USER, (nickname, callback) => {
    if (isUser(connectedUsers, nickname)) {
      callback({ isUser: true, user: null });
    } else {
      callback({ isUser: false, user: createUser({ name: nickname }) });
    }
  });

  // when user connects
  socket.on(USER_CONNECTED, user => {
    connectedUsers = addUser(connectedUsers, user);
    socket.user = user;
    io.emit(USER_CONNECTED, connectedUsers);
    console.log(connectedUsers);
  });

  //messaging
  socket.on(MESSAGE_SENT, (req, res) => {
    io.emit("sendMessage", req.body);
  });

  function isUser(userList, username) {
    return username in userList;
  }
  function removeUser(userList, username) {
    let newList = Object.assign({}, userList);
    delete newList[username];
    return newList;
  }
  function addUser(userList, user) {
    let newList = Object.assign({}, userList);
    newList[user.name] = user;
    return newList;
  }
};
