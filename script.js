//Part 1 - Math Problems

//Initial Number to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Do the numbers add to 50? True or False
const isSum50 = (num1 + num2 + num3 + num4) === 50;
console.log("Do the numbers add up to 50? ", isSum50);

//Are at least 2 numbers odd? T/F
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2;
console.log("Are there 2 or more odd numbers? ", areTwoOdd);

//No numbers can be > 25
const isOver25 = (num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25);
console.log("Are any numbers > 25? ", isOver25);

//isOver25 pt.2


//Are all numbers unique?
const isUnique = num1 != num2 && num1 != num3 && num1 !=num4 && num2 != num3 && num2 != num4 && num3 != num4;
console.log("Are all numbers unique? ", isUnique);

//Did the numbers pass all the validation tests?
const isValid = isSum50 && areTwoOdd && !isOver25 && isUnique;
console.log("Do all numbers pass the validation tests? ", isValid);


//Are all of the numbers divisible by 5?
let bool = true;
console.log("Are all numbers divisible by 5? ", bool == num1/5 && num2/5 && num3/5 && num4/5);

//Is the first number larger than the last?
const firstLast = num1 > num4;
console.log("Is the first # larger than the last? ", firstLast);

//Math Operators
const diff = num2 - num1;
console.log(diff);
console.log(diff * num3); 
console.log(diff % num4);

// Part 2 - Practical Math

/**The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon. */

const total = 1500;
const budget = 175;
console.log("I need ",  "gallons of fuel will you need for the entire trip.");
console.log("Will my budget be enough for the entire trip? ");
console.log("How long will the trip take, in hours? ");




// Part 3
