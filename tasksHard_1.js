'use strict';

console.warn("Задание дополнительное - Первая задача");
const income = +prompt("Введите сумму Вашего дохода:");
// const income = 10000;
const taxRate = 13;
const taxMaxIncome = 15000;
const taxRate2 = 20;
const taxMaxIncome2 = 50000
const taxRate3 = 30;
const taxMinIncome3 = 50000;
let taxPaiment = 0;

if (Number.isFinite(+income)) {
  // console.log(income)
  if (income < taxMaxIncome) {
    taxPaiment = Math.round(income * taxRate) / 100
  }
  if ((income >= taxMaxIncome) && (income < taxMaxIncome2)) {
    taxPaiment = Math.round(income * taxRate2) / 100
  }
  if (income >= taxMinIncome3) {
    taxPaiment = Math.round(income * taxRate3) / 100
  }
  console.log(`Ваш налог с дохода ${income}  составляет: ${taxPaiment}`)
} else {
  console.warn("была введена не цифра")
};


