import AssetsManager from './AssetsManager.js';
import KeyboardAndMouse from './KeyboardAndMouse.js';
export default class SceneLoading{
    constructor(manager){
        this.manager = manager;
        this.loading = 0;
        this.manager.eventManager.addSubscriber(this,[
            KeyboardAndMouse.Event.CLICK,
            KeyboardAndMouse.Event.MOUSEDOWN,
            KeyboardAndMouse.Event.KEYDOWN,
            KeyboardAndMouse.Event.TOUCH
        ]);
    }
    update(t){
        this.loading = AssetsManager.getLoadStatus();
    }
    draw(ctx){
        ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#ffffff";
        if(this.loading < 100){
            let text = "LOADING " + ("" + this.loading).padStart(3, ' ') + "%";
            ctx.fillText( text, ctx.canvas.width / 2 - text.length * 4, ctx.canvas.height / 2);
        }
        else{
            let text = "LOADING COMPLETE";
            ctx.fillText(text, ctx.canvas.width / 2 - text.length * 4 , ctx.canvas.height / 2 );
        }
    }
    notify(e){
        if (this.loading > 99) {
            this.manager.toMainMenu();
		}
    }
}