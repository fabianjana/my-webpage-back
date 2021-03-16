import { game, lobby } from './games/parchis/sockets'

const sockets = (socket) => {
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	game(socket);
	lobby(socket);
}

export default sockets;