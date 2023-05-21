'use strict';

console.warn("Вторая задача:");
const rain = Math.round(Math.random());
// console.log(rain);
if (rain) {
  console.log("Пошёл дождь. Возьмите зонт!");
} else {
  console.log("Дождя нет!");
}

console.warn("Третья задача:");
const passPoint = 265;
const point1 = +prompt("Введите кол-во баллов по математике: ");
const point2 = +prompt("Введите кол-во баллов по русскому языку: ");
const point3 = +prompt("Введите кол-во баллов по информатике: ");
if (Number.isFinite(point1) && Number.isFinite(point2) && Number.isFinite(point3)) {
  if ((point1 + point2 + point3) >= passPoint) {
    console.log("Поздравляю, вы поступили на бюджет!")
  } else {
    console.log("соррян брат, у вас мало баллов")
  }
} else {
  console.log("ошибка при вооде данных, введите цифры")
}

console.warn("Четвёртая задача:");
const cashOut = +prompt("сколько хотите снять денег: ");
// const cashOut = 2500;
const minNote = 100;
// console.log(cashOut % minNote);
if ((cashOut % minNote) === 0) {
  console.log("все Вы можете получить свои деньги")
} else {
  console.error("Банкомат не может выдать запрошенную сумму, попробуйте ввести другую сумму")
}



