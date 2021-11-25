"use strict";

/*Программа ниже не даёт пользователю не ввести одну из нужных нам цифр для ТИП САЙТА*/

let Type = prompt("Какой тип сайта нужен Вам (Введите цифру от 1 до 3)", ["1 - Сайт-визитка, 2 - Промо-сайт, 3 - Интернет-магазин"]);
do{
  	if(Type==1){
		console.log(Type);
		var Type$=5000;
		}
		else if(Type==2){
			console.log(Type);
			var Type$=15000;
		}
		else if(Type==3){
			console.log(Type);
			var Type$=30000;
		}
		else{			
			Type = prompt("ЦИФРУ ГОВОРЮ", ["1 - Сайт-визитка, 2 - Промо-сайт, 3 - Интернет-магазин"]);	
			if(!isNaN(Type)){
				console.log(Type);
			}
			if(Type==1){
				
				var Type$=5000;
				}
				else if(Type==2){
					
					var Type$=15000;
				}
				else if(Type==3){
					
					var Type$=30000;
				}	
		}
} while (isNaN(Type));	
console.log(Type$);


/*Программа ниже не даёт пользователю не ввести одну из нужных нам цифр для ДИЗАЙН*/

let Design = prompt("Какой дизайн Вы бы хотели видет на сайте? (Введите цифру от 1 до 3)", ["1 - Красный, 2 - Прекрасный, 3 - Отвязный"]);
do{
  	if(Design==1){
		console.log(Design);
		var Design$=5000;
		}
		else if(Design==2){
			console.log(Design);
			var Design$=15000;
		}
		else if(Design==3){
			console.log(Design);
			var Design$=30000;
		}
		else{			
			Design = prompt("Я серьёзно, цифру", ["1 - Красный, 2 - Прекрасный, 3 - Отвязный"]);	
			if(!isNaN(Design)){
				console.log(Design);
			}
			if(Design==1){
				
				var Design$=5000;
				}
				else if(Design==2){
					
					var Design$=15000;
				}
				else if(Design==3){
					
					var Design$=30000;
				}	
		}
} while (isNaN(Design));	
console.log(Design$);


/*Программа ниже не даёт пользователю не ввести одну из нужных нам цифр для АДАПТИВНОСТЬ*/

let Adapt = prompt("Под какие устройства нужно адаптировать сайт (Телефоны, ПК...)?",["1 - все устройства, 2 - компьютеры, 3 - телефоны"]);
do{
  	if(Adapt==1){
		console.log(Adapt);
		var Adapt$=23000;
		}
		else if(Adapt==2){
			console.log(Adapt);
			var Adapt$=15000;
		}
		else if(Adapt==3){
			console.log(Adapt);
			var Adapt$=15000;
		}
		else{			
			Adapt = prompt("Смешно ему...",["1 - все устройства, 2 - компьютеры, 3 - телефоны"]);	
			if(!isNaN(Adapt)){
				console.log(Adapt);
			}
			if(Adapt==1){
				
				var Adapt$=23000;
				}
				else if(Adapt==2){
					
					var Adapt$=15000;
				}
				else if(Adapt==3){
					
					var Adapt$=15000;
				}	
		}
} while (isNaN(Adapt));	
console.log(Adapt$);


let inform = {
	Type: Type,
	Design: Design,
	Adapt: Adapt,
}
console.log(inform);
console.log(Type$+Design$+Adapt$);






