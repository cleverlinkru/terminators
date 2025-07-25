import { Color, Scene } from "three";
import GameCamera from "./GameCamera";

export default class GameScene extends Scene {
	private static readonly SkyColor: string = "#333";
	
	private initialized: boolean;
	
	private camera: GameCamera;
	
	constructor() {
		super();
		this.initialized = false;
		
		this.camera = new GameCamera();
	}
	
	async init() {
		if (this.initialized) {
			throw new Error("Game scene already initialized!");
		}
		
		this.initBackground();

		this.initialized = true;
	}
	
	start() {
		if (!this.initialized) {
			throw new Error("Game scene not initialized!");
		}
	}
	
	private initBackground() {
		this.background = new Color(GameScene.SkyColor);
	}
	
	getCamera() {
		return this.camera;
	}
}