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