/*
 *
 *  Canvas Game/Scene-WorldMap
 *  XL Gaming/Declan Tyson
 *  v0.0.1
 *  21/12/2016
 *
 */

import { colours } from "./constants";

class WorldMap {
    constructor() {

    }

    draw(ctx) {
        this.drawCharacter(ctx);
    }

    drawCharacter(ctx) {
        ctx.beginPath();
        ctx.arc(200, 200, 5, 0, 2 * Math.PI);
        ctx.fillStyle = colours.black;
        ctx.fill();
        ctx.stroke();
    }
}

export { WorldMap };