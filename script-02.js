'use strict';
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';

// модуль 4 урок 1 
// console.log('%c Модуль 4 урок 1 ', rainbow);
// let nameProduct = "Картон";
// let quantityProduct = 100;
// let categoryProduct = "упаковка";
// let priceProduct = 4500;

// console.log('Наименование товара: ' + nameProduct);
// console.log('Общая сумма товаров: ' + quantityProduct * priceProduct);


// модуль 4 урок 2
console.log('%c Модуль 4 урок 2 ', rainbow);

const nameProduct = prompt("Наименование товара");
const categoryProduct = prompt("Категория товара");
const quantityProduct = +prompt("Количество товара");
const priceProduct = +prompt("Цена товара");

console.log(`Количество товара: ${quantityProduct} это число? ${Number.isFinite(quantityProduct)}`);
console.log(`Цена товара: ${priceProduct} это число? ${Number.isFinite(priceProduct)}`);

if (Number.isFinite(quantityProduct) && Number.isFinite(priceProduct)) {
  console.log(`На складе ${quantityProduct} единицы товара "${nameProduct}" на сумму ${priceProduct * quantityProduct} деревянных`)
} else {
  console.error("были введены не цифры, поэтому результата нету")
}
