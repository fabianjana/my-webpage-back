export default function sockets(socket) {
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
}