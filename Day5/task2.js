
const users = [{ name: "John" }, { name: "Jane" }];
console.log(users[0].name); 


function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); 


const arr1 = [1, 2];
const arr2 = [...arr1, 3];
console.log(arr2); 


function greet({ name }) {
  console.log(`Hello, ${name}`);
}
greet({ name: "John" }); 
