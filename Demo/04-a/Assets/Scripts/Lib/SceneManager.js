import SceneLoading from './SceneLoading.js';
import SceneMainMenu from './SceneMainMenu.js';
export default class SceneManager{
    constructor(eventManager,main) {
		this.eventManager = eventManager;
		this.main = main;
        this.scene = null;
        this.toLoading();
	}
    update(time) {
		if(this.scene != null){
			this.scene.update(time);
		}
	}
	draw(ctx) {
		if(this.scene != null){
			this.scene.draw(ctx);
		}
    }
	toLoading() {
        this.eventManager.removeAllSubscribers();
        this.scene = new SceneLoading(this);
	}
	toMainMenu() {
        this.eventManager.removeAllSubscribers();
        this.scene = new SceneMainMenu(this);
	}
}