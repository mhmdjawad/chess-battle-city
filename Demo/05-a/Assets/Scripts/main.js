import Timer from './Lib/Timer.js';
import EventManager from './Lib/EventManager.js';
import KeyboardAndMouse from './Lib/KeyboardAndMouse.js';
import AssetsManager from './Lib/AssetsManager.js';
import SceneManager from './Lib/SceneManager.js';
class Main{
    constructor(container){
        this.canvas = document.createElement('canvas');
        this.canvas.width = GLOBAL.CANVAS.w;
        this.canvas.height = GLOBAL.CANVAS.h;
        $(container).html(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = GLOBAL.CANVAS.font;
        this.EventManager = new EventManager(this);
        this.KeyboardAndMouse = new KeyboardAndMouse(window,this.EventManager,[
            ...KeyboardAndMouse.Event.ALL
        ], false);
        this.SceneManager = new SceneManager(this.EventManager,this);
        this.Timer = new Timer(GLOBAL.FRAMERATE, this, true);
        this.start();
    }
    async start(){
        AssetsManager.loadAssets();
    }
    update(time){
        this.KeyboardAndMouse.fireEvents();
        this.SceneManager.update(time);
        this.SceneManager.draw(this.ctx);
        this.ctx.fillText("" + time, 0,16);
    }
}
window.Main = Main;