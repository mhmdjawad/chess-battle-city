let GLOBAL = {};
GLOBAL.PROJECT_ASSETS = "Assets/";
GLOBAL.JSON = {
    assets : GLOBAL.PROJECT_ASSETS+'json/assets-map.json',
}
GLOBAL.SOUNDS = {
    stage_start:      GLOBAL.PROJECT_ASSETS + 'sound/stage_start.ogg',
}
GLOBAL.IMAGES = {
    assets : GLOBAL.PROJECT_ASSETS+'Images/assets.png'
};
GLOBAL.ENTITY = {
    "assets" : {
        "name"  : "assets",
        "img"   : GLOBAL.IMAGES.assets, 
        "map"   : GLOBAL.JSON.assets,
    }
}
GLOBAL.Assets = {
    "loaded" : 0,
    "count" : 3,
    "images_url" : [
        GLOBAL.IMAGES.assets
    ],
    "json_url" : [
        GLOBAL.JSON.assets
    ],
    "sounds_url" : [
        GLOBAL.SOUNDS.stage_start
    ],
    "images"    :{},
    "json"      :{},
    "sounds"    :{}
}