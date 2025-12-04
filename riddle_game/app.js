import readline from "readline-sync";
// import riddles from "./riddles/all_riddles.js";
const name = readline.question("What is your name?");
console.log(`Hello, ${name}!`);

function createPlayer(name) {
  const player1 = {
    name: name,
    timesSeconds: [],
  };
}

function addSolveTime(player, seconds) {
  player.timesSeconds.push(seconds);
  console.log(player);
}
// addSolveTime({name :'el',
//     timesSeconds:[]
// },10)

function showStats(player) {
  const array1 = player.timesSeconds;
  const sum = array1.reduce((acc, val) => acc + val, 0);
  const avg = sum / array1.length;
  console.log(sum);
  console.log(avg);
}
// showStats({name :'el',
//     timesSeconds:[1,2,3,4]
// })
