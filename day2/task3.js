const numbers = [10, 20, 30, 40, 50];
const target = 30;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    console.log("Checking number:",numbers[i]);
    if (numbers[i] === target) {
        console.log("Target ",target ," found at index ",i);
        found = true;
        break; 
    }
}
if (!found) {
    console.log("Target",target," was not found in the array.");
}
console.log("Loop finished due to 'break' or completion.");



for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Skipping even number:" i);
        continue; 
    }
    console.log("Processing odd number:"i);
}
console.log("Loop finished after 'continue'.");