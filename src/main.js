import { getCurrentWindow } from '@tauri-apps/api/window';
import kaplay from 'kaplay';
import { makeBackground } from './util.js';

// Get the current window instance for Tauri v2
const appWindow = getCurrentWindow();

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

//to make window go full screen when F11 is pressed
addEventListener("keydown",async(key)=>{
    if(key.code==="F11"){
        if(await appWindow.isFullscreen()){
            await appWindow.setFullscreen(false);
            return;
        }
        appWindow.setFullscreen(true);
    }
});

//the menu
k.scene("start", async ()=>{
    makeBackground(k);
})

//the actual content of the game
k.scene("menu", async ()=>{

})

k.go("start"); //go to start scene when game starts

