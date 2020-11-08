import Timer from './Lib/Timer.js';
import EventManager from './Lib/EventManager.js';
import KeyboardAndMouse from './Lib/KeyboardAndMouse.js';
import AssetsManager from './Lib/AssetsManager.js';
class Main{
    constructor(container){
        this.canvas = document.createElement('canvas');
        this.canvas.width = 16 * 15;
        this.canvas.height = 16 * 15;
        $(container).html(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.drawLoading(this.ctx);
        this.EventManager = new EventManager();
        this.KeyboardAndMouse = new KeyboardAndMouse(window,this.EventManager,[
            ...KeyboardAndMouse.Event.KEY
        ],true);
        this.EventManager.addSubscriber(this,[
            ...KeyboardAndMouse.Event.KEY
        ]);
        this.Timer = new Timer(1/20, this, true);
        this.frames = 0;
        this.start();
    }
    async start(){
        AssetsManager.loadAssets();
    }
    drawLoading(ctx){
        ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = "#ffffff";
		ctx.fillText("LOADING ",ctx.canvas.width / 2, ctx.canvas.height / 2);
    }
    drawCurrentTime(ctx,time){
        this.frames++;
        ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = "#ffffff";
		ctx.fillText("Time since we start  " + time, 0,16);
		ctx.fillText("Frames since we start  " + this.frames, 0,32);
		ctx.fillText("Loaded  " + AssetsManager.getLoadStatus() + "%" , 0,64);
    }
    update(time){
        this.drawCurrentTime(this.ctx,time);
    }
    notify(event){
        console.log("event " , event);
    }
}
window.Main = Main;