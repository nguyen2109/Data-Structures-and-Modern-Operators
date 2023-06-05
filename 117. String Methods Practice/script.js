// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25
//   +_Arrival;bru0943384722;fao93766109;11:45
//   +_Delayed_Arrival;hel7439299980;fao93766109;12:05
//   +_Departure;fao93766109;lis2323639855;12:30';

for (const n of flights.split('+_')) {
  const nSplit = n.split(';');

  const first = nSplit[0]
    .replaceAll('_', ' ')
    .replace('Delayed', '🛑 Delayed')
    .trim();

  const second = nSplit[1].slice(0, 3).toUpperCase();
  const thrid = nSplit[2].slice(0, 3).toUpperCase();
  const time = nSplit[3].replace(':', 'h');
  const res = `${first} from ${second} to ${thrid} (${time}) `.padStart(35);

  console.log(res);
}
