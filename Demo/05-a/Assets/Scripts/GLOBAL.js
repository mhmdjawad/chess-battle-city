let GLOBAL = {};

GLOBAL.PIXELSIZE = 1;
GLOBAL.CANVASCONTAINER = ".canvas_container";

GLOBAL.TILESIZE = 16 * GLOBAL.PIXELSIZE;
GLOBAL.BLOCKSIZE = GLOBAL.TILESIZE * 2;


GLOBAL.GAMEBOARD = {
    w : GLOBAL.BLOCKSIZE * 11,
    h : GLOBAL.BLOCKSIZE * 11,
};
GLOBAL.CANVAS = {
    w : GLOBAL.GAMEBOARD.w +  GLOBAL.BLOCKSIZE * 4,
    h : GLOBAL.GAMEBOARD.h,
    font : "14px sans-serif"
};
GLOBAL.FRAMERATE = 1/20;
GLOBAL.PROJECT_ASSETS = "Assets/";

GLOBAL.JSON = {
    assets : GLOBAL.PROJECT_ASSETS+'Json/assets-map.json',
    tutorial : GLOBAL.PROJECT_ASSETS+'Json/how-to-play.json',
}
GLOBAL.SOUNDS = {
    stage_start:      GLOBAL.PROJECT_ASSETS + 'sound/stage_start.ogg',
}
GLOBAL.IMAGES = {
    font1  : GLOBAL.PROJECT_ASSETS+'Images/font1.png',
    font2  : GLOBAL.PROJECT_ASSETS+'Images/font2.png',
    tanks  : GLOBAL.PROJECT_ASSETS+'Images/tanks.png',
    tiles  : GLOBAL.PROJECT_ASSETS+'Images/tiles.png',
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
        GLOBAL.IMAGES.font1,
        GLOBAL.IMAGES.font2,
        GLOBAL.IMAGES.tanks,
        GLOBAL.IMAGES.tiles
    ],
    "json_url" : [
        GLOBAL.JSON.assets,
        GLOBAL.JSON.tutorial,
    ],
    "sounds_url" : [
        GLOBAL.SOUNDS.stage_start
    ],
    "images"    :{},
    "json"      :{},
    "sounds"    :{}
}

GLOBAL.CHARS = ' 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.:-×?©!';

GLOBAL.PROJECTASSETSLOADED = false;