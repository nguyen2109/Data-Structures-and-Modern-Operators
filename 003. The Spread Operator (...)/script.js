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
};

//const arr = [5, 6, 7];

// const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log('🚀 ~ file: script.js:42 ~ newBadArr:', newBadArr);

//const newGoodArr = [1, 2, ...arr];
// console.log('🚀 ~ file: script.js:45 ~ newGoodArr:', newGoodArr);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log('🚀 ~ file: script.js:48 ~ menu:', menu);

//Real-word Example
// const nguyenlieuPasta = [
//   prompt('Nhập vào nguyên liệu 1'),
//   prompt('Nhập vào nguyên liệu 2'),
//   prompt('Nhập vào nguyên liệu 3'),
// ];

// restaurant.orderPasta(...nguyenlieuPasta);

//Object
// const newRestaurant = {
//   founder: 'Nguyen',
//   ...restaurant,
//   CEO: 'In',
//   foundedIn: 1999,
// };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Nguyên';

console.log(restaurant.name, restaurantCopy.name);
