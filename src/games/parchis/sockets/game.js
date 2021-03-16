const game = (socket) => {
	socket.on('init parchis', (callback) => {
		const initState = { selectedPiece: '', pieces: {} };
		for (let i = 0; i < 4; i ++) {
			initState.pieces[`blue${i}`] = 'homeBlue';
			initState.pieces[`red${i}`] = 'homeRed';
			initState.pieces[`green${i}`] = 'homeGreen';
			initState.pieces[`yellow${i}`] = 'homeYellow';
		}
		callback(initState);
	});
}

export default game;