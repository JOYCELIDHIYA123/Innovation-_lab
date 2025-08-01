function add(a, b) { return a + b; }
const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(add(2, 3));
console.log(sumAll(1, 2, 3, 4, 5));


