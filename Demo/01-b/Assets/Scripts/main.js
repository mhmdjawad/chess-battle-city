import Timer from './Lib/Timer.js';
class Main{
    constructor(container){
        this.canvas = document.createElement('canvas');
        this.canvas.width = 16 * 25;
        this.canvas.height = 16 * 25;
        $(container).html(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.drawLoading(this.ctx);
        this.Timer = new Timer(1/20, this, true);
        this.frames = 0;
    }
    drawLoading(ctx){
        ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = "#ffffff";
		ctx.fillText("LOADING ",ctx.canvas.width / 2, ctx.canvas.height / 2);
    }
    update(time){
        this.frames++;
        this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = "#ffffff";
		this.ctx.fillText("Time since we start  " + time, 50,50);
		this.ctx.fillText("Frames since we start  " + this.frames, 50,80);
    }
}
window.Main = Main;