let express = require("express");
let app = express();
let socketio = require("socket.io");
let http = require("http");
let Router = require("./routes/router");
let { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
	socket.on("join", ({ userName, roomName }) => {
		let user = addUser({ id: socket.id, userName, roomName });

		socket.broadcast.to(user.roomName).emit("message", { user: "admin", text: `${user.roomName}, has joined!` });

		socket.emit("message", { user: "admin", text: `${user.userName} welcome to the room ${user.roomName}` });

		socket.join(user.room);
	});

	socket.on("sendMessage", (message, cb) => {
		const user = getUser(socket.id);
		io.to(user.room).emit("message", { user: user.userName, text: message });
		cb();
	});

	socket.on("disconnect", () => {
		console.log("Connection is disconnecting");
	});
});

app.use(Router);

server.listen(PORT, () => {
	console.log("Leggo");
});
