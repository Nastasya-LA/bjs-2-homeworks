//Задача 1
"use strict";

function solveEquation(a, b, c) {
  let discriminant = b**2 - 4 * a * c;
  let roots = [];

  if (discriminant < 0) {
    console.log("Корней нет");
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    roots.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  }
  return roots;
}

let coefficients = [1, -3, 2];
console.log(solveEquation(coefficients[0], coefficients[1], coefficients[2]));

//Задача 2
  function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthlyInterestRate = percent / 100 / 12;

  let principal = amount - contribution;

  let monthlyPayment = principal * (monthlyInterestRate + (monthlyInterestRate / (((1 + monthlyInterestRate) ** countMonths) - 1)));

  let totalPayment = monthlyPayment * countMonths;

  return parseFloat(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Вывод: 12479.52