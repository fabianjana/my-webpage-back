import Player from '../Player';

const lobby = (socket, io, lobby) => {
	socket.on('create parchis player', () => {
		console.log(lobby)
		socket.player = new Player(lobby);
		console.log(`user ${socket.id} created a new player`);
	});

	socket.on('change nick', (nick, callback) => {
		callback(socket.player.changeNick(nick));
	});

	socket.on('create parchis room', (title, callback) => {
		const response = socket.player.createRoom(title);
		callback(response);
		if (!response.error) io.emit('room created');
	});
}

export default lobby;