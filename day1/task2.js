let num = 42;
let str = "42";
let bool = true;
let empty = null;
let notDefined;
let obj = { key: "value" };
let sym = Symbol("id");

console.log(typeof num, typeof str, typeof bool, typeof empty, typeof notDefined, typeof obj, typeof sym);

let convertedNumber = Number(str); 
let convertedString = String(num);

console.log("Converted Number:", convertedNumber);
console.log("Converted String:", convertedString);


console.log("10" + 5);    
console.log("10" - 5);    
console.log(true + 1);    
console.log(false + "1"); 
