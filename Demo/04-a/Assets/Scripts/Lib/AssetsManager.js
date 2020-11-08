export default class AssetsManager{
    static loadImage(url) {
        const promise = new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', () => {
                resolve(image);
            });
            image.addEventListener('error', () => {
                reject();
            });
            image.src = url;
        });
        return promise;
    }
    static async loadJSON(url) {
        const r = await fetch(url);
        return await r.json();
    }
    static async loadAssets(){
        if(AssetsManager.LOADED){return;}
        if(AssetsManager.ISLOADING){return;}
        AssetsManager.ISLOADING = true;
        [...GLOBAL.Assets.images_url].forEach(url=>{
            const image = new Image();
            image.addEventListener('load', () => {
                GLOBAL.Assets.images[url] = image;
                GLOBAL.Assets.loaded++;
            });
            image.addEventListener('error', () => {
                GLOBAL.Assets.images[url] = null;
                GLOBAL.Assets.loaded++;
            });
            image.src = url;
        });
        [...GLOBAL.Assets.json_url].forEach(url=>{
            fetch(url).then(r=> r.json()).then(json=>{
                GLOBAL.Assets.json[url] = json;
                GLOBAL.Assets.loaded++;
            });
            
        });
        [...GLOBAL.Assets.sounds_url].forEach(url=>{
            var sound = new Audio(url);
            GLOBAL.Assets.sounds[url] = sound;
            GLOBAL.Assets.loaded++;
        });
        AssetsManager.ISLOADING = false;
        AssetsManager.LOADED = true;
    }
    static getLoadStatus(){
        return Math.floor((GLOBAL.Assets.loaded / GLOBAL.Assets.count) * 100);
    }
}
