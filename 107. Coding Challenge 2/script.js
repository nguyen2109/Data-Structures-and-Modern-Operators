'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const objScored = Object.entries(game.scored);

for (const [key, value] of objScored) {
  console.log(`Goal ${Number(key) + 1} :  ${value}`);
}

const objOdds = Object.values(game.odds);
let sum = 0;
let avgOdd = 0;
for (const x of objOdds) {
  sum += x;
  avgOdd = sum / objOdds.length;
}
console.log(`Tỷ lệ đặt cược trung bình là ${avgOdd} `);

const objEntry = Object.entries(game.odds);
for (const [teamkey, value] of objEntry) {
  const winOrDraw = teamkey === 'x' ? 'draw' : 'victory';
  console.log(`Odd of ${winOrDraw} ${game[teamkey] ?? ''} : ${value} `);
}

const scorers = {};

for (const [goal, shooter] of game.scored.entries()) {
  const score = scorers?.[shooter] ?? 0;
  scorers[shooter] = score + 1;
}
console.log(scorers);

// const players1 = game.players[0];
// const players2 = game.players[1];

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;

// const printGoals = function (...listPlayer) {
//   console.log(...listPlayer, ...game.score);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('team1 win');
// team1 > team2 && console.log('team2 win');
