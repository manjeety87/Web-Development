// var name;
// let variable2 = "variable2";
// alert(name);
// alert(variable2);

// name = prompt("Enter your name");
// alert("Your name is "+name);

// variable2 = prompt("Enter your Course name here");
// alert("Your Course name is "+variable2)

// document.write("JavaScript is fun");

var miles;
var gallons;
var again;

do {
  do {
    miles = parseInt(prompt("Enter the number of miles driven"));
  } while (isNaN(miles) || miles < 0);

  do {
    gallons = parseInt(prompt("Enter the number of gallons used"));
  } while (isNaN(gallons) || gallons < 0);

  document.write(`<p>Miles per gallon used are ${miles / gallons} </p>`);
  again = parseInt(prompt("Do you want to calculate again? Y/N"));
} while (again == "Y" || again == "y");

// do {
//   miles = prompt("Enter the number of miles driven");
// } while (isNaN(miles) || miles < 0);

// do {
//   gallons = prompt("Enter the number of gallons used");
// } while (isNaN(gallons) || gallons < 0);

// function calculateMilesPerGallon(toCalculate, message) {
//   do {
//     toCalculate = prompt(message);
//     console.log(toCalculate);
//   } while (isNaN(toCalculate) || toCalculate < 0);
//   return toCalculate;
// //   return document.write(`<p>Miles per gallon used are ${miles / gallons} </p>`);
// }

// miles = calculateMilesPerGallon(miles, "Enter the number of miles driven");
// gallons = calculateMilesPerGallon(gallons, "Enter the number of gallons used");
// console.log("Miles", miles, "Gallons", gallons);
document.write(`<p>Miles per gallon used are ${miles / gallons} </p>`);
// do {
//   miles = prompt("Enter the number of miles driven");
// } while (isNaN(miles) || miles < 0);
