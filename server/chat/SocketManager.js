const io = require("../server.js").io;

const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require("../../client/src/Events");
const { createUser, createMessage, createChat } = require("../../client/src/Factories");
const connectedUsers = {};

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
