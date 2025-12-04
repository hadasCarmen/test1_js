import allRiddles from "./all_riddles.js";
import readline from "readline-sync";

export function askRiddle(riddleObj) {
  let properAnswer = true;
  while (properAnswer) {
    console.log(riddleObj.id);
    console.log(riddleObj.name);
    console.log(riddleObj.difficultyName);
    console.log(riddleObj.taskDescription);
    const proper = readline.question("riddleObj.answers");
    if (proper == riddleObj.correctAnswer) {
      properAnswer = false;
    }
  }
}

export function measureSolveTime(riddleObj) {
  const start = new Date().getTime();
  askRiddle(riddleObj);
  const end = new Date().getTime();
  const time = (end - start) / 1000;
  return time;
}
