import { createPlayer, addSolveTime, showStats } from "./funcions.js";
import allRiddles from "./riddles/all_riddles.js";
import { askRiddle, measureSolveTime } from "./riddles/riddles_manager.js";
import readline from "readline-sync";
function mainGame() {
  console.log("welcome to the riddle game");
  const name = readline.question("What is your name?");
  console.log(`Hello, ${name}!`);
  const player = createPlayer(name);

  allRiddles.forEach((riddleObj) => {
    let duration = measureSolveTime(riddleObj);
    addSolveTime(player, duration);
    showStats(player);
  });
}

mainGame();
