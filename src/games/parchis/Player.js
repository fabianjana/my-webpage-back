import response from "../../util/response";

class Player {
	constructor(lobby) {
		this.nick = '';
		this.lobby = lobby;
	}

	changeNick(nick) {
		if (nick.length < 2 || nick.length > 12)
			return response(this.nick, 'Nick must have between 2 and 12 characters.');
		this.nick = nick;
		return response(this.nick);
	}

	createRoom(title) {
		return this._lobby.createRoom(this, title);
	}
}

export default Player;