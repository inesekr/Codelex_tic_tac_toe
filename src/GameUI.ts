/**
 * DO NOT EDIT THIS FILE
 */

import { Game } from "./Game";

const game = new Game();

const info = document.getElementById("info");
const button = document.getElementById("play-button") as HTMLElement ;
const board = document.getElementById("board");

button.addEventListener("click", () => {
  game.restart();
  draw(game);
});

const draw = (game: Game) => {
  board.innerHTML = "";

  game.getCells().forEach((cell, i) => {
    const div = document.createElement("div");
    div.className = "box";
    if (cell !== "-") {
      div.innerText = cell;
    }
    div.addEventListener("click", () => {
      game.onClick(i);
      draw(game);
    });
    board.appendChild(div);
  });

  if (game.isTie()) {
    info.innerText = `It's a tie!`;
    button.removeAttribute("disabled");
    button.className = "button button-hoverable";
  } else if (game.getWinner() !== undefined) {
    info.innerText = `Nice, ${game.getWinner()} won`;
    button.removeAttribute("disabled");
    button.className = "button button-hoverable";
  } else {
    info.innerText = `It's ${game.getTurn()} turn`;
    button.setAttribute("disabled", "true");
    button.className = "button";
  }
};

draw(game);