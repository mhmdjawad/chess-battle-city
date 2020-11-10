import KeyboardAndMouse from './KeyboardAndMouse.js';
import SpriteManager from './SpriteManager.js';
export default class SceneHowToPlay{
    constructor(manager){
        this.manager = manager;
        this.manager.eventManager.addSubscriber(this,[
            KeyboardAndMouse.Event.CLICK,
            KeyboardAndMouse.Event.MOUSEDOWN,
            KeyboardAndMouse.Event.KEYDOWN,
            KeyboardAndMouse.Event.TOUCH
        ]);
        this.start();
    }
    
    async start(){
        
    }

    update(t){
        
    }

    draw(ctx){
        ctx.clearRect(0, 0, GLOBAL.CANVAS.w, GLOBAL.CANVAS.h);
        ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, GLOBAL.CANVAS.w, GLOBAL.CANVAS.h);
        ctx.fillStyle = "#ffffff";
        let text = "HOW TO PLAY (1)";
        ctx.fillText( text, GLOBAL.CANVAS.w / 2 - text.length * 4, 16);
    }

    notify(e){
        if(e.name == KeyboardAndMouse.Event.KEYDOWN && e.event == KeyboardAndMouse.key.LEFT){

        }
        else if(e.name == KeyboardAndMouse.Event.KEYDOWN && e.event == KeyboardAndMouse.key.RIGHT){

        }
        else if(e.event == KeyboardAndMouse.key.BACKSPACE){
            this.manager.toMainMenu();
        }
        else{
            console.log(e);
        }
    }
}