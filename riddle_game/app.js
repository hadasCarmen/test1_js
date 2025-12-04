import { createPlayer, addSolveTime, showStats } from "./funcions.js";
import allRiddles from "./riddles/all_riddles.js";
import { askRiddle, measureSolveTime } from "./riddles/riddles_manager.js";
import readline from "readline-sync";
function mainGame() {
  console.log("welcome to the riddle game");
  const name = readline.question("What is your name?");
  console.log(`Hello, ${name}!`);
  const player = createPlayer(name);
  const hawPlay = readline.question(
    "choose:\n1 to Sort riddles by difficulty and then play them\n2 to Choose to play only riddles of a specific difficulty\n3 to Choose to play all riddles up to a certain difficulty"
  );
  if (hawPlay === "1") {
    allRiddles.sort((a, b) => a.difficulty - b.difficulty);

    allRiddles.forEach((riddleObj) => {
      let duration = measureSolveTime(riddleObj);
      addSolveTime(player, duration);
      showStats(player);
    });
  } else if (hawPlay === "2") {
      const levelQ = readline.question(
        "choose :\n 1 to Easy\n2 to midle\n3 to Mystery"
      );
    allRiddles.forEach((riddleObj) => {
      if (riddleObj.difficulty == levelQ) {
        let duration = measureSolveTime(riddleObj);
        addSolveTime(player, duration);
        showStats(player);
      }
    });
  } else if (hawPlay === "3") {
      const levelQ = readline.question(
        "choose :\n 1 to Easy\n2 to midle\n3 to Mystery"
      );
    allRiddles.forEach((riddleObj) => {
      if (riddleObj.difficulty <= levelQ) {
        let duration = measureSolveTime(riddleObj);
        addSolveTime(player, duration);
        showStats(player);
      }
    });
  }
}

mainGame();
