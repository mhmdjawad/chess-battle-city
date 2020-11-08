import KeyboardAndMouse from './KeyboardAndMouse.js';
export default class SceneMainMenu{
    constructor(manager){
        this.manager = manager;
        this.manager.eventManager.addSubscriber(this,[
            KeyboardAndMouse.Event.CLICK,
            KeyboardAndMouse.Event.MOUSEDOWN,
            KeyboardAndMouse.Event.KEYDOWN,
            KeyboardAndMouse.Event.TOUCH
        ]);
        this.loaded = {
            left : 0,
            right : GLOBAL.CANVAS.w,
            finished : false
        };
        this.lastTime = 0;
        this.menuItems = [
            "1 PLAYER",
            "2 PLAYERS",
            "HOW TO PLAY",
            "******==*****==*****==***",
        ];
        this.cursor = {
            t : ">>",
            x : 70,
            m : 0
        };
    }
    getBuffer(){
        this.canvas = document.createElement('canvas');
        this.canvas.width = GLOBAL.CANVAS.w;
        this.canvas.height = GLOBAL.CANVAS.h;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = GLOBAL.CANVAS.font;
        this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(0, 0, GLOBAL.CANVAS.w, GLOBAL.CANVAS.h);
        this.ctx.fillStyle = "#ffffff";
        for(let i = 0 ; i < this.menuItems.length;i++){
            this.ctx.fillText(this.menuItems[i] , 100   , GLOBAL.CANVAS.h / 2 + 16 * i);
        }
        this.ctx.fillText( this.cursor.t , this.cursor.x   , GLOBAL.CANVAS.h / 2 + 16 * this.cursor.m);
        return this.canvas;
    }
    update(t){
        if(this.loaded.finished == false){
            this.lastTime = t;
            this.loaded.left += 4;
            this.loaded.right -= 4;
            if(this.loaded.left >= this.loaded.right){
                this.loaded.finished = true;
            }
        }
    }
    draw(ctx){
        ctx.clearRect(0, 0, GLOBAL.CANVAS.w, GLOBAL.CANVAS.h);
        let buffer = this.getBuffer();
        ctx.drawImage(buffer,
            0,0,
            buffer.width/2,
            buffer.height,
            this.loaded.left - buffer.width/2,0,
            buffer.width/2,
            buffer.height
            );
        ctx.drawImage(buffer,
            buffer.width/2,0,
            buffer.width/2,
            buffer.height,
            this.loaded.right,0,
            buffer.width/2,
            buffer.height
            );
    }
    notify(e){
        if(e.name == KeyboardAndMouse.Event.KEYDOWN && e.event == KeyboardAndMouse.key.DOWN){
            this.cursor.m++;
            this.cursor.m = this.cursor.m % this.menuItems.length;
        }
        else if(e.name == KeyboardAndMouse.Event.KEYDOWN && e.event == KeyboardAndMouse.key.UP){
            this.cursor.m--;
            if(this.cursor.m < 0) this.cursor.m = this.menuItems.length-1;
        }
        else{
            console.log(e);
        }
    }
}