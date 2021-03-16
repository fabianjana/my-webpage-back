import { Router } from 'express';
import Parchis from '../games/parchis';

const lobby = Parchis.lobby;
 
const router = Router();
 
router.get('/rooms', (req, res) => {
	return res.json(lobby.roomList);
});
 
export default router;