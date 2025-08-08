
const obj = { name: "John" };
function greet() {
  console.log(`Hello, ${this.name}`);
}
greet.call(obj); 
greet.apply(obj); 
const boundGreet = greet.bind(obj);
boundGreet(); 