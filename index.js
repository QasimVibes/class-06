"use strict";
// Write a program sum of all numbers between 1 to 100
let plus = 0;
let list = [];
for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        plus += index;
        list.push(index);
    }
}
console.log("Sum ", plus, list);
let factNum = 10;
const factorial = (factNum) => {
    if (factNum > 0) {
        let result = 1;
        let index = 1;
        while (index <= factNum) {
            result *= index;
            index++;
        }
        return result;
    }
    else {
        throw new Error("Please enter a positive number");
    }
};
let factResult = factorial(factNum);
console.log(factResult);
