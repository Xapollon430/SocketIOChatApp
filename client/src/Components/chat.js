import React from "react";
import { connect } from "react-redux";

const Chat = props => {
	console.log(props);
	return (
		<div>
			<h1>{props.userName}</h1>
			<h1>{props.roomName}</h1>
		</div>
	);
};

const MapStateToProps = state => {
	return {
		userName: state.userName,
		roomName: state.roomName
	};
};

export default connect(MapStateToProps)(Chat);
