'use strict';

// Sửa lại ký tự tên
const nameGuest = 'kHoa';
const nameToLowerCase = nameGuest.toLowerCase();
const correctName = nameToLowerCase[0].toUpperCase() + nameToLowerCase.slice(1);
console.log(correctName);

//so sánh email

const emailTrue = 'hello@nguyen.vn';
const emailGuest = ' Hello@Nguyen.VN \n';

const fixedEmail = emailGuest.toLowerCase().trim();
console.log(fixedEmail);
console.log(emailTrue === fixedEmail);

//Replacing
const text = 'Xin chào, thật vui để được gặp. chào bạn';

console.log(text.replaceAll('chào', 'cảm ơn'));
console.log(text.replace(/chào/g, 'cảm ơn'));
//Xin cảm ơn, thật vui để được gặp. cảm ơn bạn
console.log(text.replace('chào', 'cảm ơn'));
//Xin cảm ơn, thật vui để được gặp. chào bạn
