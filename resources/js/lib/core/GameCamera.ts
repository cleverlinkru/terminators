import { PerspectiveCamera } from "three";

export default class GameCamera extends PerspectiveCamera {
	public static readonly DEFAULT_FOV = 75;
	private static readonly Z_NEAR = 0.01;
	private static readonly Z_FAR = 1000;
	
	private onResizeRef: () => void;
	
	constructor() {
		super(
			GameCamera.DEFAULT_FOV,
			GameCamera.getAspectRatio(),
			GameCamera.Z_NEAR,
			GameCamera.Z_FAR
		);
		
		this.onResizeRef = this.onResize.bind(this);
		window.addEventListener("resize", this.onResizeRef);
	}
	
	private static getAspectRatio() {
		return window.innerWidth / window.innerHeight;
	}
	
	private onResize() {
		this.aspect = GameCamera.getAspectRatio();
		this.updateProjectionMatrix();
	}
}