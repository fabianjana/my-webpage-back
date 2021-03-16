import { expect } from "chai";
import Game from "../src/games/parchis/Game";
import Player from "../src/games/parchis/Player"

describe('create players', () => {
	describe('constructor', () => {
	});
});

describe('Start game', () => {
	describe('create game', () => {

		let player1;
		let player2;
		let game;

		beforeEach(() => {
			player1 = new Player('Player 1');
			player2 = new Player('Player 2');

			let game = player1.createdGame();
		});

		it('nicks should match', () => {
			expect(player1.nick).to.equal('Player 1');
			expect(player2.nick).to.equal('Player 2');
		});

		it('create game and check role', () => {
			expect(game).to.be.an.instanceOf(Game);
			expect(player1.roles).to.include('owner');
			expect(player1.roles).to.include('player');
			expect(player1.roles).to.not.include('spectator');
			expect(player1.game).to.equal(game);
			expect(game.players).to.include(player1);
		});

		it('join game and check role', () => {
			player2.join(game);
			expect(player2.roles).to.not.include('owner');
			expect(player2.roles).to.include('player');
			expect(player2.roles).to.not.include('spectator');
			expect(player2.game).to.equal(game);
			expect(game.players).to.include(player2);
		});

		it('join game as spectator', () => {
			player2.spectate(game);
			expect(player2.roles).to.not.include('owner');
			expect(player2.roles).to.not.include('player');
			expect(player2.roles).to.include('spectator');
			expect(player2.game).to.equal(game);
			expect(game.players).to.not.include(player2);
		});


	});
});