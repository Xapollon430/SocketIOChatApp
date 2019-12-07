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
	socket.on("join", ({ userName, roomName }, callback) => {
		let { user } = addUser({ id: socket.id, userName, roomName });

		socket.join(user.room);

		socket.broadcast.to(user.room).emit("message", { user: "admin", test: `${user.name}, has joined!` });

		socket.emit("message", { user: "admin", text: `${user.name} welcome to the room ${user.room}` });

		callback();
	});

	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit("message", { user: user.name, text: message });

		callback();
	});

	socket.on("disconnect", () => {
		console.log("Connection is disconnecting");
	});
});

app.use(Router);

server.listen(PORT, () => {
	console.log("Leggo");
});
