import 'dotenv/config';
// import cors from 'cors';
import express from 'express';
import { Server } from "socket.io";

import parchis from './games/parchis';
import routes from './routes';

const app = express();
const parchisLobby = parchis.lobby;

// enable CORS
// app.use(cors());

// routes
app.use('/data', routes.data);
app.use('/api/parchis', routes.parchis);
 
// create server
const server = app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!`),
);

const io = new Server(server);

// socket management
io.on('connection', (socket) => {
	console.log(`user connected ${socket.id}`);

	socket.on('disconnect', () => {
		console.log(`user disconnected ${socket.id}`);
	});

	parchis.sockets.game(socket, io);
	parchis.sockets.lobby(socket, io, parchisLobby);
});