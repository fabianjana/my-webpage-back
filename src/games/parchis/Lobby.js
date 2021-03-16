import response from "../../util/response";

class Lobby {
	constructor() {
		this._roomList = [];
		this.createdRooms = 0;
	}

	get roomList() {
		return this._roomList;
	}

	createRoom(player, title) {
		if (title.length < 4 || title.length > 16)
			return response(null, 'Room title must have between 4 and 16 characters.');
		const room = {
			id: this.createdRooms,
			owner: player.nick,
			title: title
		}
		this._roomList.push(room);
		this.createdRooms++;

		return response(room);
	}

	removeRoom() {

	}

}


export const lobby = new Lobby();