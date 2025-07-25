import Renderer from "./Renderer";
import GameScene from "./GameScene";

export default class Game {
	private static _instance: Game;
	private renderer: Renderer;
	private scene: GameScene;

	static instance(): Game {
		if (!Game._instance) {
		  throw new Error("Game not initialized");
		}

		return this._instance;
	}

	static init() {
		Game._instance = new Game();
	}

	private constructor() {
		this.renderer = new Renderer();
		this.scene = new GameScene();
	}

	getRenderer() {
		return this.renderer;
	}

	getScene() {
		return this.scene;
	}
}