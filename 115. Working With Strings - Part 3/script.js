'use strict';

//split and join
// console.log('a+b+c+d'.split('+'));
// const [firstName, lastName] = 'Nguyen Khoa'.split(' ');
// const joinMethod = ['MR.', firstName, lastName.toUpperCase()].join(' ');
// console.log(joinMethod);
// Cách 1 :
// const capitalzName = function (name) {
//   const lowerName = name.toLowerCase();
//   const a = [];
//   for (const n of lowerName.split(' ')) {
//     a.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(a.join(' '));
// };
//Cách 2 :
// const capitalzName = function (name) {
//   const upperName = name.toLowerCase();
//   const a = [];
//   for (const n of upperName.split(' ')) {
//     a.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(a.join(' '));
// };
// capitalzName('dao khoa nguyen');
// capitalzName('van dang tan nam');
// capitalzName('dAo kHoa nguYen');

//Padding
const message = 'Go to broading 23';
// console.log(message.padStart(24, '+'));
const maskCC = function (number) {
  const str = String(number);
  const first4Number = str.slice(0, 4);
  const last4Number = str.slice(-4);
  console.log(first4Number + last4Number.padStart(str.length, '*'));
};
maskCC(12312312313212); //1231**********3212
maskCC('456456456544565'); //4564***********4565
