import { getCurrentWindow } from '@tauri-apps/api/window';
import kaplay from 'kaplay';
import { makeBackground } from './util.js';
import { SCALE_FACTOR } from './constants.js';

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

k.loadSprite("background","./background.png");
k.loadSprite("graves","./graves.png");
k.loadSprite("bg","./bg.png");
k.loadSprite("ghouls","./ghouls.png");
k.loadSprite("walls","./walls.png");
k.loadSprite("walls2","./walls2.png");
k.loadSprite("jackie","./jackie.png");
k.loadSprite("jackie2","./jackie2.png");

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
k.scene("start", async () => {
  makeBackground(k);

  const map = k.add([
    k.sprite("graves"),
    k.pos(-250, -2.5),
    k.scale(SCALE_FACTOR), 
  ]);

  const clouds = map.add([
    k.sprite("ghouls"),
    k.pos(0, 0), // Start at position relative to map
  ]);

  const cloudSpeed = 5;

  // Runs this func every frame 
  clouds.onUpdate(() => {
    clouds.pos.x += cloudSpeed * k.dt(); // Use delta time for smooth movement
    
    // Loop clouds back when they go off screen
    if (clouds.pos.x > 700) {
      clouds.pos.x = -500; 
    } 
  });
});

//the actual content of the game
k.scene("menu", async ()=>{

})

k.go("start"); //go to start scene when game starts

