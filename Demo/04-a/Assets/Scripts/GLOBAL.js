let GLOBAL = {};

GLOBAL.PIXELSIZE = 1;
GLOBAL.TILESIZE = 16 * GLOBAL.PIXELSIZE;
GLOBAL.GAMEBOARD = {
    w : GLOBAL.TILESIZE * 20,
    h : GLOBAL.TILESIZE * 20,
};
GLOBAL.CANVAS = {
    w : GLOBAL.GAMEBOARD.w +  GLOBAL.TILESIZE * 6,
    h : GLOBAL.GAMEBOARD.h,
    font : "14px sans-serif"
};
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