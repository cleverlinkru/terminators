import Game from "./Game";

export default class GameLoop {
	private static readonly MAX_FPS = 75;
	
	constructor() {
		const game = Game.instance();
		this.renderer = game.getRenderer();
		this.scene = game.getScene();
		this.camera = this.scene.getCamera();
	}
	
	async run() {
		await this.scene.init();
		this.scene.start();
		
		this.runLoop();
	}
	
	private runLoop() {
		let previousTime = performance.now();
		
		const timestep = 1 / GameLoop.MAX_FPS;
		let accumulator = 0;
		
		this.renderer.setAnimationLoop((time) => {
			let dt = (time - previousTime) / 1000;
			previousTime = time;
			
			accumulator += dt;
			
			let numUpdateSteps = 0;
			while (accumulator >= timestep) {
				accumulator -= timestep;
				
				if (++numUpdateSteps >= 240) {
					accumulator = 0;
					break;
				}
			}
			
			this.renderer.render(this.scene, this.camera);
		});
	}
}