export const changeUserName = userName => {
	return {
		type: "CHANGE_NAME",
		payload: {
			userName
		}
	};
};

export const changeRoom = roomName => {
	return {
		type: "CHANGE_ROOM",
		payload: {
			roomName
		}
	};
};

export const addMessage = message => {
	return {
		type: "ADD_MESSAGE",
		payload: {
			message
		}
	};
};

export const addToMessages = message => {
	return {
		type: "ADD_TO_MESSAGES",
		payload: {
			message
		}
	};
};
