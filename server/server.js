let express = require("express");
let app = express();
let socketio = require("socket.io");
let http = require("http");
let Router = require("./routes/router");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio();

io.on("connection", socket => {
	console.log("New connection came in!");

	socket.on("disconnect", () => {
		console.log("Connection is disconnecting");
	});
});

app.use(Router);

server.listen(PORT, () => {
	console.log("Leggo");
});
