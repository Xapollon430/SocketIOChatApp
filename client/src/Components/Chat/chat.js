import React, { useEffect } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { Socket } from "dgram";

let socket;

const Chat = props => {
	const ENDPOINT = "localhost:5000";
	let { userName, roomName } = props;

	useEffect(() => {
		socket = io(ENDPOINT);
		socket.emit("join", { userName, roomName }, () => {});

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	}, []);

	return <h3>Chat</h3>;
};

const MapStateToProps = state => {
	return {
		userName: state.userName,
		roomName: state.roomName
	};
};

export default connect(MapStateToProps)(Chat);
