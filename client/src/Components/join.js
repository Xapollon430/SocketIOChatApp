import React from "react";
import { changeUserName, changeRoom } from "../Store/actions";
import { connect } from "react-redux";

const Join = props => {
	const submitHandler = e => {
		e.preventDefault();
		let userName = document.querySelector("#userName").value;
		let roomName = document.querySelector("#roomName").value;

		props.changeUserName(userName);
		props.changeRoom(roomName);
	};

	return (
		<form onSubmit={e => submitHandler(e)}>
			{props.userName}
			<input type="text" id="userName" />
			{props.roomName}
			<input type="text" id="roomName" />

			<button type="submit"> submit</button>
		</form>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		changeUserName: userName => {
			dispatch(changeUserName(userName));
		},
		changeRoom: roomName => {
			dispatch(changeRoom(roomName));
		}
	};
};

const MapStateToProps = state => {
	return {
		userName: state.userName,
		roomName: state.roomName
	};
};

export default connect(MapStateToProps, mapDispatchToProps)(Join);
