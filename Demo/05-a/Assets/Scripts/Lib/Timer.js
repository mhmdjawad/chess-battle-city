export default class Timer {
    constructor(deltaTime = 1/60, ctrl, autostart=false) {
        this.accumulatedTime = 0;
        this.lastTime = null;
        this.deltaTime = deltaTime;
        this.ctrl = ctrl;
        if(autostart) this.start();
        this.isPaused = this.isStoped = false;
    }
    fireOnce(){
        this.queue();
        this.isStoped = true;
    }
    updateProxy(time){
        if (this.lastTime) {
            this.accumulatedTime += (time - this.lastTime) / 1000 ;
            if (this.accumulatedTime > 1) {
                this.accumulatedTime = 1;
            }
            while (this.accumulatedTime > this.deltaTime) {
                this.ctrl.update(Math.floor(time/1000));    //provide time in seconds passed
                this.accumulatedTime -= this.deltaTime;
                break;
            }
        }
        this.lastTime = time;
        if(!this.isStoped){
            this.queue();
        }
    }
    togglePause(){
        this.isPaused = !this.isPaused;
    }
    queue() {
        requestAnimationFrame((t) => {
            this.updateProxy(t);
        })
    }
    start() {
        this.isStoped = false;
        this.queue();
    }
    stop(){this.isStoped = true;}
}