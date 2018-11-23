const uuidv4 = require("uuid/v4");

//create user
const createUser = ({ name = "" } = {}) => ({
  id: uuidv4(),
  name
});

//create message
const createMessage = ({ message = "", sender = "" } = {}) => ({
  id: uuidv4(),
  time: getTime(new Date(Date.now())),
  message,
  sender
});

//create chat
const createChat = ({ messages: [], name = "Community", users: [] } = {}) => ({
  id: uuidv4(),
  name,
  messages,
  users,
  typingUsers: []
});

const getTime = date => {
  return `${date.gethours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

module.exports = {
  createMessage,
  createChat,
  createUser
};
