import Game from "./Game";
import Renderer from "./Renderer";
import GameScene from "./GameScene";
import GameCamera from "./GameCamera";

export default class GameLoop {
	private renderer: Renderer;
	private scene: GameScene;
	private camera: GameCamera;

	init() {
		const game = Game.instance();
		this.renderer = game.getRenderer();
		this.scene = game.getScene();
		this.camera = this.scene.getCamera();
	}

	async run() {
		await this.scene.init();
		this.scene.start();
	}

	public update(data) {
		this.renderer.render(this.scene, this.camera);
	}
}