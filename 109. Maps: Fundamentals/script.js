'use strict';

const rest = new Map();

rest.set('name', 'Nguyên');
console.log(rest.get('name'));

rest.set(true, 'We are open 😊');
rest.set(false, 'We are closed 😔');
rest.set(1, 'Set by Number').set(2, 'Set by Number');

rest.set('Món ăn', ['Pizza', 'Phở', 'Mì', 'Cơm', 'Pizza', 'Phở', 'Mì', 'Cơm']);
rest.set('open', 11);
rest.set('close', 23);

const time = 20;
rest.get(time > rest.get('open') && time < rest.get('close'));
// = reset.get(true or false) => open or close value

rest.has('open'); // true or false boolean
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(rest.size);

const array = [4, 5];

rest.set(array, 'Test');
console.log(rest.get(array));

rest.set(document.querySelector('h1'), 'Heading');
