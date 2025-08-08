
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); 

const obj = { x: 1, y: 2 };
const { x, y } = obj;
console.log(x, y); 


console.log(obj.x); 
console.log(obj['y']); 

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
