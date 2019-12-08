import React, { useEffect } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { addMessage, addToMessages } from "../../Store/actions";

const ENDPOINT = "localhost:5000";
let socket;

const Chat = props => {
	let { userName, roomName, message, messages, addMessage, addToMessages } = props;

	useEffect(() => {
		socket = io(ENDPOINT);
		socket.emit("join", { userName, roomName });

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	}, [ENDPOINT]);

	useEffect(() => {
		socket.on("message", message => {
			console.log(message);
			addToMessages(message);
		});
	}, [messages]);

	const sendMessage = e => {
		e.preventDefault();
		if (message) {
			socket.emit("sendMessage", message, () => {
				addMessage("");
			});
		}
	};

	console.log(message, messages);

	return (
		<div>
			<input
				onChange={e => {
					addMessage(e.target.value);
				}}
				onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
				value={message}
				placeholder="Type a message..."
				type="text"
			/>
		</div>
	);
};

const MapStateToProps = state => {
	return {
		userName: state.userName,
		roomName: state.roomName,
		message: state.message,
		messages: state.messages
	};
};

const MapDispatchToProps = dispatch => {
	return {
		addMessage: message => {
			dispatch(addMessage(message));
		},
		addToMessages: message => {
			dispatch(addToMessages(message));
		}
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Chat);
