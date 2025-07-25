import { WebGLRenderer } from "three";

export default class Renderer extends WebGLRenderer {
	constructor() {
		super();
		this.init();
	}

	private init() {
		this.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.domElement);
		
		window.addEventListener("resize", () => {
			this.setSize(window.innerWidth, window.innerHeight);
		});
	}

	getCanvas(): HTMLCanvasElement {
		return this.domElement;
	}
}