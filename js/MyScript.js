"use strict";

/*Тип
Дизайн
Адаптивность*/

let Type = prompt("Какой тип сайта нужен Вам");
console.log(Type);
let Type$=5000;
let Design = prompt("Какой дизайн Вы бы хотели видет на сайте?");
console.log(Design);
let Design$=5000;
let Adapt = prompt("Под какие устройства нужно адаптировать сайт (Телефоны, ПК...)?");
console.log(Adapt);
let Adapt$=5000;
let inform = {
	Type: Type,
	Design: Design,
	Adapt: Adapt,
}
console.log(inform);
console.log(Type$+Design$+Adapt$);