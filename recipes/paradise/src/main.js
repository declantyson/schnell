/*
 *
 *  Paradise QuickStart
 *  Declan Tyson
 *  v0.0.34
 *  09/02/2018
 *
 */

import { Util, startingMaps, chooseStartingMap, choosePeople, Player, WorldMap, StartGame } from 'paradise-engine';

window.startGame = (locale, people) => {
    Util.clearLog();

    locale = startingMaps[locale] || startingMaps[chooseStartingMap()];
    people = people || choosePeople();

    let player = new Player(),
        worldMap = new WorldMap(player);

    window.game = StartGame(locale, people, player, worldMap);
    window.game.people = people;

    document.querySelectorAll('button').forEach((button) => {
        button.blur();
    });
};