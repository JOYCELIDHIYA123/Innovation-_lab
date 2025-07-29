function display(){
  console.log("calculator");
  console.log("1. Addition");
  console.log("2. subtraction");
  console.log("3. multiplication");
  console.log("4. Division");
  choice = prompt("Enter your choice: ");
  return choice;
}

function calculator() {
  let num1,num2,result;
  let choice = display();

  switch (choice) {
    case 1:
      result = num1 + num2;
      break;
    case 2 :
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    case 4:
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Division by zero is not allowed.");
        return;
      }
      break;
    default:
      console.log(" Invalid choice .");
      return;
  }

  alert(`The result is: ${result}`);
}

calculator();