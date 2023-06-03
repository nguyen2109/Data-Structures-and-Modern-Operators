'use strict';

const question = new Map([
  ['question', 'Ngôn ngữ nào bạn đang học ?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Bạn đã trả lời chính xác'],
  [false, 'Bạn đã trả lời sai'],
]);
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key} : ${value}`);
  }
}

const answer = 2;
console.log(question.get(answer === question.get('correct')));

//convert map to array

const arrayMap = [...question];
console.log(arrayMap);
