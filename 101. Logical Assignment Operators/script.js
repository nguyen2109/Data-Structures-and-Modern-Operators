'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Đơn hàng của bạn là ${this.starterMenu[starterIndex]} và ${this.mainMenu[mainIndex]} sẽ giao tại ${address} vào lúc ${time}`,
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Đây là đơn bánh Pasta của bạn với ${ing1} ,  ${ing2} , ${ing3}`,
    );
  },
  orderPizza: function (thanhphanchinh, ...thanhphankhac) {
    console.log(thanhphanchinh, thanhphankhac);
  },
};

const rest1 = {
  name: 'Nguyên',
  numGuest: 10,
};
const rest2 = {
  name: 'Ỉn',
  owner: 'Nguyên',
};
console.log('-----OR-----');
// rest1.numGuest ||= 10;
// rest2.numGuest ||= rest1.numGuest;
console.log('-----Nullish-----');
//?? sẽ chỉ dành cho null hoặc undefinded , nếu có null hoặc undefinded thì nó sẽ lấy giá trị còn lại trong điều kiện
// rest1.numGuest ??= 10;
// rest2.numGuest ??= rest1.numGuest;
console.log('-----&&-----');
// rest1.owner = rest1.owner && 'Chủ sở hữu 2';
// rest2.owner = rest2.owner && 'Chủ sở hữu 2';
rest1.owner &&= 'Chủ sở hữu 2';
rest2.owner &&= 'Chủ sở hữu 2';
//{ name: 'Nguyên', numGuest: 10, owner: undefined } { name: 'Ỉn', owner: 'Chủ sở hữu 2' }
console.log(rest1, rest2);
