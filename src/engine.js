import GameEngine from "./GameEngine/core.js";

var game;

window.addEventListener('load', () => {
    //let container = document.getElementById('craneGame')
    let padding = 100;
    game = new GameEngine(document.documentElement.clientWidth - padding, document.documentElement.clientHeight - padding);
    game.init();
});