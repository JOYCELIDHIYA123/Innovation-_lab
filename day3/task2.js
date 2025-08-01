const addExpression = function(a, b) { return a + b; };
const addArrow = (a, b) => a + b;
const sumAllArrow = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(addExpression(2, 3));
console.log(addArrow(2, 3));
console.log(sumAllArrow(1, 2, 3, 4, 5));

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);



