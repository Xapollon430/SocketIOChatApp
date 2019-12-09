import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { addMessage, addToMessages } from "../../Store/actions";

const ENDPOINT = "localhost:5000";
let socket;

const Chat = props => {
	let { userName, roomName } = props;
	let [message, setMessage] = useState("");
	let [messages, setMessages] = useState([]);

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
			setMessages([...messages, message]);
		});
	}, [messages]);

	const sendMessage = e => {
		e.preventDefault();
		if (message) {
			socket.emit("sendMessage", message, () => {
				setMessage("");
			});
		}
	};

	console.log(message, messages);

	return (
		<div>
			<input
				onChange={e => {
					setMessage(e.target.value);
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
		roomName: state.roomName
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

export default connect(MapStateToProps)(Chat);
