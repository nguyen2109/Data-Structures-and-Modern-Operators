'use strict';

const airline = 'VietName Air Line';
const plane = 'B730';

console.log(plane[0]); //B
console.log(airline.length); //17
console.log(plane.length); //4
console.log(airline.indexOf('A')); //9
console.log(airline.lastIndexOf('e')); //16
console.log(airline.slice(3)); //tName Air Line
console.log(airline.slice(3, 14)); //tName Air L
console.log(airline.slice(-3)); //ine

console.log(airline.slice(0, airline.indexOf('Air'))); //VietName
console.log(airline.slice(airline.indexOf(' ') + 1)); //Air Line
console.log(airline.slice(1, -3)); //ietName Air L

const checkMiddleSeat = function (seat) {
  // Nếu là B và E thì là ghế giữa
  let sttCheck = '';
  seat.slice(-1) == 'B' || seat.slice(-1) == 'E'
    ? (sttCheck = true)
    : (sttCheck = false);
  console.log(sttCheck);
};
checkMiddleSeat('11A');
checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('11D');
checkMiddleSeat('11E');
checkMiddleSeat('1F');
