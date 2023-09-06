"use strict";

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavari 23, Firenze Italy",
	categories: ["Italian", "Mexican", "Vegetarian", "Original"],
	startingMenu: ["Garlic Bread", "Foccacia", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Rissoto"],
	order: function (startingIndex, mainIndex) {
		return [this.startingMenu[startingIndex], this.mainMenu[mainIndex]];
	},
	schedule: {
		wed: {
			open: 7,
			close: 22,
		},
		thu: {
			open: 7,
			close: 22,
		},
		fri: {
			open: 8,
			close: 23,
		},
		sat: {
			open: 10,
			close: 2,
		},
	},
};

// const [starter, main] = restaurant.order(2, 1);
// console.log(starter);
// console.log(main);

// const [cat1, cat2] = restaurant.categories;
// console.log(cat1 + ", " + cat2);

// const vowels = ["a", "e", "i", "o", "u"];

// const newVowels = vowels.map((vowel) => {
// 	return vowel.toUpperCase();
// });
// console.log(newVowels);

// const results = ['7','8','9','5','10','6.9']

// const newResults = results.map((result) => {
//     if (result < 7){
//         return 'reprobado';
//     }else
//         return 'aprobado';

// })
// console.log(newResults)

// Destructuring in Arrays

// const [ , , var1] = restaurant.mainMenu
// console.log (var1)

// const {name} = restaurant
// console.log(name)


// Destructuring Object , schedule, friday
const { 
	schedule: {
		fri: {
			open,
			close
		}
} } = restaurant;
console.log(open, close);
