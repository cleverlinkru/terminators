import Renderer from "./Renderer";
import GameScene from "./GameScene";
import GameLoop from "./GameLoop";

export default class Game {
	private static _instance: Game;
	private renderer: Renderer;
	private scene: GameScene;
	private gameLoop: GameLoop;

	static instance(): Game {
		if (!Game._instance) {
		  throw new Error("Game not initialized");
		}

		return this._instance;
	}

	static init() {
		Game._instance = new Game();
		
		Game._instance.gameLoop.init();
	}

	private constructor() {
		this.renderer = new Renderer();
		this.scene = new GameScene();
		this.gameLoop = new GameLoop();
	}

	start() {
		this.startGame();
	}

	private async startGame() {
		await this.gameLoop.run();
	}

	getRenderer() {
		return this.renderer;
	}

	getScene() {
		return this.scene;
	}

	getGameLoop() {
		return this.gameLoop;
	}
}