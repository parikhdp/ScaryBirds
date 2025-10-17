import kaplay from 'kaplay';

//letterbox: true means the game will scale irrespective of the screen size
//while maintaining the aspect ratio
const k=kaplay({
    width:1280,
    height:720,
    letterbox:true,
    global:false,
    scale:2
});

//loading the assets

k.loadSprite("jackie","./jackie.png");
k.loadSprite("ghouls","./ghouls.png");
k.loadSprite("graves","./graves.png");
k.loadSprite("walls","./walls.png");

k.loadSound("jump","./jump.wav");
k.loadSound("hurt","./hurt.wav");
k.loadSound("confirm","./confirm.wav");

//letting user use full screen mode

