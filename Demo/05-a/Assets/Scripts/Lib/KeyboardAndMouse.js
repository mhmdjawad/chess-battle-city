export default class KeyboardAndMouse{ 
    constructor(target,eventManager,eventListeners,eventOnLunch = false){
        KeyboardAndMouse[target] = this;
        this.eventListeners = eventListeners;
        this.target = target;
        this.eventManager = eventManager;
        this.events = [];
		this.keys = {};
        this.listen();
        this.eventOnLunch = eventOnLunch;
    }
    listen() {
        [...this.eventListeners].forEach(eventName => {
            this.target.addEventListener(eventName, event => {
                // console.log("event",event);
                if(this.eventOnLunch){
                    this.eventManager.fireEvent({ 
                        name    : eventName,
                        event   : event
                    });
                    event.preventDefault();
                    event.stopPropagation();
                }
                else if(KeyboardAndMouse.Event.KEY.includes(eventName)){
                    this.events.push({ 
                        name    : eventName,
                        event   : event.which
                    });
                }
                else if(eventName === KeyboardAndMouse.Event.CONTEXT){
                    //event.preventDefault();
                }
                else if(eventName === KeyboardAndMouse.Event.MOUSEMOVE){
                    //event.preventDefault();
                }
                else{
                    this.events.push({ 
                        name    : eventName,
                        event   : event
                    });
                }
            });
        });
    }
    fireEvents() {
		this.events.forEach(function (event) {
			this.eventManager.fireEvent(event);
		}, this);
		this.events = [];
    }
}
KeyboardAndMouse.Event = {
    //Keyboard events
    KEYDOWN     : 'keydown',        //ANY key is pressed
    KEYUP       : 'keyup',          //ANY key is released
    KEYPRESS    : 'keypress',       //ANY key (except Shift, Fn, or CapsLock) is in a pressed position (fired continuously).

    MOUSEDOWN   : 'mousedown',      //MOUSE LEFT PRESSED
    MOUSEMOVE   : 'mousemove',      //MOUSE MOVED
    CONTEXT     : 'contextmenu',    //MOUSE RIGHT PRESSED
    WHEEL       : 'wheel',          //MOUSE WHEEL


    TOUCHSTART  : 'touchstart',
    TOUCHEND    : 'touchend',
    TOUCHCANCEL : 'touchcancel',
    TOUCHMOVE   : 'touchmove',

    CLICK   : 'click',


    TOUCHORCLICK : ['click','touchstart'],
    TOUCH : ['click','touchstart','touchend','touchcancel','touchmove'],
    KEY : ['keydown','keyup','keypress'],
    MOUSE : ['mousedown','mousemove','wheel','contextmenu'],
    ALL : ['keydown','keyup','keypress','mousedown','mousemove','wheel','contextmenu','touchstart','touchend','touchcancel','touchmove']
}
KeyboardAndMouse.key = {
    BACKSPACE : 8,
    TAB : 9,
    ENTER : 13,
    SHIFT : 16,
    CTRL : 17,
    ALT : 18,
    PAUSEBREAK : 19,
    CAPSLOCK : 20,
    ESCAPE : 27,
    SPACE : 32,
    PAGEUP : 33,
    PAGEDOWN : 34,
    END : 35,
    HOME : 36,
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40,
    INSERT : 45,
    DELETE : 46,
    0 : 48,
    1 : 49,
    2 : 50,
    3 : 51,
    4 : 52,
    5 : 53,
    6 : 54,
    7 : 55,
    8 : 56,
    9 : 57,
    A : 65,
    B : 66,
    C : 67,
    D : 68,
    E : 69,
    F : 70,
    G : 71,
    H : 72,
    I : 73,
    J : 74,
    K : 75,
    L : 76,
    M : 77,
    N : 78,
    O : 79,
    P : 80,
    Q : 81,
    R : 82,
    S : 83,
    T : 84,
    U : 85,
    V : 86,
    W : 87,
    X : 88,
    Y : 89,
    Z : 90,
    LEFTWINDOW : 91,
    RIGHTWINDOW : 92,
    SELECT : 93,
    NUMPAD0 : 96,
    NUMPAD1 : 97,
    NUMPAD2 : 98,
    NUMPAD3 : 99,
    NUMPAD4 : 100,
    NUMPAD5 : 101,
    NUMPAD6 : 102,
    NUMPAD7 : 103,
    NUMPAD8 : 104,
    NUMPAD9 : 105,
    MULTIPLY : 106,
    ADD : 107,
    SUBTRACT : 109,
    DECIMALPOINT : 110,
    DIVIDE : 111,
    F1 : 112,
    F2 : 113,
    F3 : 114,
    F4 : 115,
    F5 : 116,
    F6 : 117,
    F7 : 118,
    F8 : 119,
    F9 : 120,
    F10 : 121,
    F11 : 122,
    F12 : 123,
    NUMLOCK : 144,
    SCROLLLOCK : 145,
    SEMICOLON : 186,
    EQUALSIGN : 187,
    COMMA : 188,
    DASH : 189,
    PERIOD : 190,
    FORWARDSLASH : 191,
    GRAVEACCENT : 192,
    OPENBRACKET : 219,
    BACKSLASH : 220,
    CLOSEBRAKET : 221,
    SINGLEQUOTE : 222,
}