import React from "react";
import { changeUserName, changeRoom } from "../../Store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./join.css";

const Join = props => {
	let { roomName, userName, changeRoom, changeUserName } = props;

	const submitHandler = e => {
		e.preventDefault();
		let userName = document.querySelector("#userName").value;
		let roomName = document.querySelector("#roomName").value;

		props.changeUserName(userName);
		props.changeRoom(roomName);
	};

	return (
		<div className="formWrapper">
			<form onSubmit={e => submitHandler(e)}>
				<h3>Sign Up to ChatRoom!</h3>
				<hr />
				<div className="inputWrapper">
					<input type="text" id="userName" placeholder="Name" onChange={e => changeUserName(e.target.value)} />
					<input type="text" id="roomName" placeholder="Room" onChange={e => changeRoom(e.target.value)} />

					<Link to={"/chat"} onClick={e => (!userName || !roomName ? e.preventDefault() : null)}>
						<button className="btn btn-primary btn-block">Join</button>
					</Link>
				</div>
			</form>
		</div>
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
