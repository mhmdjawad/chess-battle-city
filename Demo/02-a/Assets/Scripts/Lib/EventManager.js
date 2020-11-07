export default class EventManager{
    constructor(main){
		this.main = main;
        this.subscribers = {};
    }
    removeAllSubscribers() {this.subscribers = {};}
    addSubscriber(subscriber, events) {
		for (var i in events) {
			if (!this.subscribers[events[i]]) {
				this.subscribers[events[i]] = [];
			}
			this.subscribers[events[i]].push(subscriber);
		}
    }
    removeSubscriber(subscriber) {
		for (var i in this.subscribers) {
			for (var j in this.subscribers[i]) {
				if (this.subscribers[i][j] === subscriber) {
					this.subscribers[i].splice(j, 1);
				}
			}
		}
    }
	fireEvent(event) {
		var subscribers = this.subscribers[event.name];
		for (var i in subscribers) {
			if(subscribers[i].notify) subscribers[i].notify(event);
		}
	}
}