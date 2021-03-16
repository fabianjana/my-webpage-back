import Player from '../Player';

const lobby = (socket, lobby) => {
	socket.on('create parchis player', () => {
		socket.player = new Player(lobby);
		console.log(`user ${socket.id} created a new player`);
	});

	socket.on('change nick', (nick, callback) => {
		callback(socket.player.changeNick(nick));
	});

	socket.on('create parchis room', (title, callback) => {
		const msg = socket.player.createRoom(title);
		callback(msg);
	});
}

export default lobby;