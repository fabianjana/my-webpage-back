import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { Server } from "socket.io";

import routes from './routes';
import sockets from './sockets';

const app = express();

// enable CORS
app.use(cors());

// routes
app.use('/data', routes.data);
app.use('/parchis', routes.parchis);
 
// create server
const server = app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!`),
);

// create socket
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
		credentials: true
	}
});

io.on('connection', (socket) => {
	console.log(socket.id);
	sockets(socket);
});