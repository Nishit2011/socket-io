const express = require("express");
const colors = require("colors");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const pathDir = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(pathDir));

app.use(express.json());

io.on("connection", ()=>{
    console.log("Socket io connection")
})

server.listen(3005,()=> console.log(`Server running on PORT ${3005}`.bold.yellow))