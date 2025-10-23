//writing main player logic here
import { SCALE_FACTOR } from './constants.js';

export function makePlayer(k){
    return k.make([
        k.sprite("jackie"),
        k.area({
            shape:new k.Rect(k.vec2(0,1.5),8,5)
        }),
        k.anchor("center"),
        k.scale(SCALE_FACTOR),
        {
            isDead:false,
            speed: 600,
            keyControllers:[],
            setControls(){
                const jumpLogic=()=>{
                    k.play("jump"),
                    this.jump();
            }
        }
    }
    ]);
}