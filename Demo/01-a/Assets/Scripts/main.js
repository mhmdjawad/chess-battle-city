class Main{
    constructor(container){
        this.canvas = document.createElement('canvas');
        this.canvas.width = 16 * 25;
        this.canvas.height = 16 * 25;
        $(container).html(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.drawLoading(this.ctx);
    }
    drawLoading(ctx){
        ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = "#ffffff";
		ctx.fillText("LOADING ",ctx.canvas.width / 2, ctx.canvas.height / 2);
    }
}
window.Main = Main;