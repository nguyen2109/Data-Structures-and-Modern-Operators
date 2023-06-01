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
};
restaurant.orderDelevery({
  starterIndex: 2,
  mainIndex: 0,
  time: '23:15',
  address: 'Trung Văn , Hà Nội',
});

//Default Value
const { menu = [], starterMenu: starters = [] } = restaurant;

//console.log(menu, starters);
//[] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//Mutating variabels
// let a = 111;
// let b = 999;
// const obj = { a: 222, b: 222, c: 222 };

// ({ a, b } = obj);
// // console.log(a, b); //222 222

//Nested Obj
// const {
//   sat: { open: o, close: c },
// } = justHours;
// console.log(o, c);
