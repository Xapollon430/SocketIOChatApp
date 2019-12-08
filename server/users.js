const users = [];

const addUser = ({ id, userName, roomName }) => {
	userName = userName.trim().toLowerCase();
	roomName = roomName.trim().toLowerCase();

	const existingUser = users.find(user => user.room === roomName && user.name === userName);

	if (existingUser) {
		return {
			error: "Username is taken!"
		};
	}

	const user = { id, userName, roomName };

	users.push(user);

	return user;
};

const removeUser = id => {
	const index = users.findIndex(user => user.id === id);

	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = {
	addUser,
	removeUser,
	getUser,
	getUsersInRoom
};
