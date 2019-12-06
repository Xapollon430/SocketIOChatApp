const initialState = {
	userName: "",
	roomName: ""
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_NAME":
			return {
				...state,
				userName: action.payload.userName
			};
		case "CHANGE_ROOM":
			return {
				...state,
				roomName: action.payload.roomName
			};
		default:
			return state;
	}
};

export default reducer;
