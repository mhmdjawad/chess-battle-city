import KeyboardAndMouse from './KeyboardAndMouse.js';
import SpriteManager from './SpriteManager.js';

window.SpriteManager = SpriteManager;

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
            {
                "name" : "1 PLAYER",
                "x" : 100,
                "y" : GLOBAL.CANVAS.h / 2 + 16 * 0,
                "callback" : function(manager){
                    manager.toOnePlayerGame()
                }
            },
            {
                "name" : "2 PLAYERS",
                "x" : 100,
                "y" : GLOBAL.CANVAS.h / 2 + 16 * 1,
                "callback" : function(manager){
                    manager.toMultiPlayerGame()
                }
            },
            {
                "name" : "HOW TO PLAY",
                "x" : 100,
                "y" : GLOBAL.CANVAS.h / 2 + 16 * 2,
                "callback" : function(manager){
                    manager.toHowToPlay()
                }
            }
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
        this.drawBrickBorder(this.ctx);
        this.drawIntro(this.ctx);
        this.ctx.fillStyle = "#ffffff";
        [...this.menuItems].forEach(item=>{
            this.ctx.fillText(item.name, item.x , item.y);
        });
        this.ctx.fillText( this.cursor.t , this.cursor.x   , GLOBAL.CANVAS.h / 2 + 16 * this.cursor.m);
        return this.canvas;
    }

    drawBrickBorder(ctx){
        let brick = SpriteManager.getSprite("brick");
        let size = brick.width;
        for(let i = 1 ; i < GLOBAL.CANVAS.h / size - 1;i++){
            ctx.drawImage(brick, 0, i * size );
            ctx.drawImage(brick, GLOBAL.CANVAS.w - size , i * size);
        }
        for(let i = 0 ; i < GLOBAL.CANVAS.w / size;i++){
            ctx.drawImage(brick, i * size  ,0);
            ctx.drawImage(brick, i * size  ,GLOBAL.CANVAS.h - brick.height);
        }        
    }
    drawIntro(ctx){
        let font = SpriteManager.getFont("brick");
        let lines = [
            "CHESS ",
            " BATTLE",
            "  CITY"
        ];
        let x = GLOBAL.BLOCKSIZE * 2;
        let y = GLOBAL.BLOCKSIZE * 1;
        let img = null;
        for(let k = 0 ; k < lines.length;k++){
            let text = lines[k];
            for(let i = 0 ; i < text.length ;i++){
                img = font.get(text[i]);
                ctx.drawImage(img, x + i*img.width,y);
            }
            y += img.height + 4;
        }
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
        if(e.event == KeyboardAndMouse.key.DOWN){
            this.cursor.m++;
            this.cursor.m = this.cursor.m % this.menuItems.length;
        }
        else if(e.event == KeyboardAndMouse.key.UP){
            this.cursor.m--;
            if(this.cursor.m < 0) this.cursor.m = this.menuItems.length-1;
        }
        else if(e.event == KeyboardAndMouse.key.ENTER){
            let menu = this.menuItems[this.cursor.m];
            menu.callback(this.manager);
        }
        else{
            console.log(e);
        }
    }
}