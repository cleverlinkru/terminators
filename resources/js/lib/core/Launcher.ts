import GameLoop from "./GameLoop";

export default class Launcher {
	constructor() {
		this.gameLoop = new GameLoop();
	}
	
	start() {
		this.startGame();
	}
	
	private async startGame() {
		await this.gameLoop.run();
	}
}