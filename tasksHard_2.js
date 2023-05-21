'use strict';

console.warn("Задание дополнительное - Вторая задача");
// const income = +prompt("Введите сумму Вашего дохода:");
// const income = 40000;
// const taxRate = 13;
// const taxMaxIncome = 15000;
// const taxRate2 = 20;
// const taxMaxIncome2 = 50000
// const taxRate3 = 20;
// const taxMinIncome3 = 50000;
let taxPaimentProgress = 0;

if (Number.isFinite(+income)) {
  if (income < taxMaxIncome) {
    taxPaimentProgress += Math.round(income * taxRate) / 100
  }
  if ((income >= taxMaxIncome) && (income < taxMaxIncome2)) {
    taxPaimentProgress += Math.round(taxMaxIncome * taxRate) / 100;
    taxPaimentProgress += Math.round((income - taxMaxIncome) * taxRate2) / 100;
  }
  if (income >= taxMinIncome3) {
    taxPaimentProgress += Math.round(taxMaxIncome * taxRate) / 100;
    taxPaimentProgress += Math.round((taxMaxIncome2 - taxMaxIncome) * taxRate2) / 100;
    taxPaimentProgress += Math.round((income - taxMinIncome3) * taxRate3) / 100;
  }

  console.log(`Ваш ПРОГРЕССИВНЫЙ налог с дохода ${income}  составляет: ${taxPaimentProgress}`)
} else {
  console.warn("была введена не цифра")
};