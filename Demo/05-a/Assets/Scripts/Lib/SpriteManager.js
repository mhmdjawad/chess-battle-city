import AssetsManager from './AssetsManager.js';
export default class SpriteManager{
    static load(){
        if(AssetsManager.getLoadStatus() < 100) return;
        if(SpriteManager.LOADED) return;
        if(SpriteManager.ISLOADING) return;
        SpriteManager.ISLOADING = true;
        SpriteManager.SPRITES = new Map();
        SpriteManager.FONTS = new Map();
        let map         = GLOBAL.Assets.json[GLOBAL.JSON.assets];
        let images      = GLOBAL.Assets.images;
        if(!map) {
            console.log("map for assets not loaded, abort for now",GLOBAL.JSON.assets);
            SpriteManager.ISLOADING = false;
            SpriteManager.LOADED = false;
            return;
        }
        map = map.assets;
        SpriteManager.COUNT = 0;
        for(let i in map){
            let entry = map[i];
            let img = images[GLOBAL.IMAGES[entry.file]];
            if(!img) {
                console.log("image not found, aborting for now", GLOBAL.IMAGES[entry.file]);
                SpriteManager.ISLOADING = false;
                SpriteManager.LOADED = false;
                return;
            }
            if(entry.type == "font"){
                let size = entry.size;
                SpriteManager.FONTS.set(entry.name,new Map());
                const rowLen = img.width;
                for (let [index, char] of [...GLOBAL.CHARS].entries()) {
                    const x = index * size % rowLen;
                    const y = Math.floor(index * size / rowLen) * size;
                    let canvas = this.cropImage(char,img,x,y,size,size);
                    SpriteManager.COUNT++;
                    SpriteManager.FONTS.get(entry.name).set(char,canvas);
                }

            }
            else if(entry.type == "entity"){
                let entities = entry.entities;
                for(let j in entities){
                    let x = entities[j].x;
                    let y = entities[j].y;
                    let size = entities[j].size;
                    for(let k in entities[j].elements){
                        let canvas = this.cropImage(entities[j].elements[k],img,x,y,size,size);
                        SpriteManager.SPRITES.set(entities[j].elements[k],canvas);
                        SpriteManager.COUNT++;
                        x+= size;
                    }
                }
            } 
        }
        if(GLOBAL.PROJECTASSETSLOADED){
            $(GLOBAL.CANVASCONTAINER).append("<hr>");
            for(let [k,c] of SpriteManager.SPRITES){
                $(GLOBAL.CANVASCONTAINER).append(c);
            }
            for(let [k,m] of SpriteManager.FONTS){
                for(let [k2,c] of m){
                    $(GLOBAL.CANVASCONTAINER).append(c);
                }
            }
        }
        console.log("done load sprites count " + SpriteManager.COUNT);
        SpriteManager.ISLOADING = false;
        SpriteManager.LOADED = true;
        return true;
    }
    static cropImage(name,image,x,y,w,h){
        let canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(image,
            x,y,w,h,
            0,0,w,h);
        canvas.id = name;
        return canvas;
    }
    static getSprite(name){
        return SpriteManager.SPRITES.get(name);
    }
    static getFont(name){
        return SpriteManager.FONTS.get(name);
    }
}
SpriteManager.COUNT = 0;