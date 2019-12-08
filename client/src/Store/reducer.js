const initialState = {
	userName: "",
	roomName: "",
	message: "",
	messages: []
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
		case "ADD_MESSAGE":
			return {
				...state,
				message: action.payload.message
			};
		case "ADD_TO_MESSAGES":
			return {
				...state,
				messages: [...state.messages, action.payload.message]
			};
		default:
			return state;
	}
};

export default reducer;
