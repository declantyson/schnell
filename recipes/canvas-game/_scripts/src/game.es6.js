/*
 *
 *  Canvas Game/Game
 *  XL Gaming/Declan Tyson
 *  v0.0.1
 *  21/12/2016
 *
 */

import { WorldMap } from "./worldmap";

window.onload = function() {
    var activeGame = new Game("world", 1024, 768, 60),
        worldMap = new WorldMap(),
        activeWorld = new World(activeGame, worldMap);
};

class Game {
    constructor(element, width, height, fps) {
        this.canvas = document.getElementById(element);
        this.canvas.width = width;
        this.canvas.height = height;
        this.fps = fps;
        this.ctx = this.canvas.getContext("2d");

        context = this.ctx;
    }
}

class World {
    constructor(game, scene) {
        this.game = game;
        this.scene = scene;

        window.drawScene = setInterval(this.draw.bind(this), 1000 / this.game.fps);
    }

    draw() {
        let pre_canvas = document.createElement('canvas'),
            pre_ctx = pre_canvas.getContext('2d');
        pre_canvas.height = this.game.canvas.height;
        pre_canvas.width = this.game.canvas.width;

        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

        this.scene.draw(pre_ctx);

        this.game.ctx.drawImage(pre_canvas, 0, 0);
    }
}