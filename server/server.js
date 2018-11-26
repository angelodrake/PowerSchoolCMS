const path = require("path");
const PORT = process.env.PORT || 3001;
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const user = require("./routes/user");
const server = require("http").Server(app);

let io = (module.exports.io = require("socket.io")(server));
const SocketManager = require("./chat/SocketManager.js");

io.on("connection", SocketManager);
const API = require("./routes/");
const userAPI = require("./routes/");
const apiRoute = require("./routes/api");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sessions
app.use(
  session({
    secret: "Kavita-Drake",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); //Checks user session in local strat

// Routes
app.use("/user", API);
app.post("/getMessage", (req, res) => {
  io.emit("sendMessage", req.body);
  res.status(200).send("success");
});

app.use("/api", apiRoute);
app.use("/user", userAPI);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

server.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
