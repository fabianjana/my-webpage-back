class Lobby {
	constructor() {
		this._roomList = [];
		this.createdRooms = 0;
	}

	get roomList() {
		return this._roomList;
	}

	createRoom(player, title) {
		const room = {
			id: this.createdRooms,
			owner: player.nick,
			title: title
		}
		this._roomList.push(room);
		this.createdRooms++;

		return {
			ok: true,
			msg:'room succesful created'
		};
	}

	removeRoom() {

	}

}


export const lobby = new Lobby();