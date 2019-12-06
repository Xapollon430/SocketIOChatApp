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
