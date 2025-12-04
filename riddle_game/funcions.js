import readline from "readline-sync";

export function createPlayer(name) {
  const player = {
    name: name,
    timesSeconds: [],
  };
  return player;
}

export function addSolveTime(player, seconds) {
  player.timesSeconds.push(seconds);
  console.log(player);
}

export function showStats(player) {
  const array1 = player.timesSeconds;
  const sum = array1.reduce((acc, val) => acc + val, 0);
  const avg = sum / array1.length;
  console.log(`all time answers  ${sum}`);
  console.log(`avg time answer  ${avg}`);
}
