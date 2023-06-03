'use strict';

const orderSet = new Set([
  'Pizza',
  'Phở',
  'Mì',
  'Cơm',
  'Pizza',
  'Phở',
  'Mì',
  'Cơm',
]);
orderSet.size;
orderSet.add('Cháo', 'Cháo');
orderSet.delete('Mì');
orderSet.has('Mì'); //false
orderSet.has('Cháo'); //true

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Mì'), orderSet.has('Cháo'));

//Chuyển từ Object thành array :

const orderSetObj = [...orderSet];
console.log(orderSetObj);

console.log(new Set('nnn1').size);
