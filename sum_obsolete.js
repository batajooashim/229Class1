// let keyword to create 2 variables num1 & num2
// function - 2 regular and arrow => sum
// pass values with variables & array (spread keywords)

let num1 = 5;
let num2 = 10;

function sum(a, b) {
    return a+b;
}

// arrow function
let arrowSum = (a, b) => {
    return a+b;
}

// console.log(sum(num1, num2));

// Spread Keyword
// console.log(sum(...[4,3]));

// Arrow Sum
console.log(arrowSum(5,6));