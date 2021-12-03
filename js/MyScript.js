"use strict";

/*Программа ниже не даёт пользователю не ввести одну из нужных нам цифр для ТИП САЙТА*/
/* 
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
/*
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

*/
/*Программа ниже не даёт пользователю не ввести одну из нужных нам цифр для АДАПТИВНОСТЬ*/
/*
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
var message = "Работа будет стоить " + (Type$+Design$+Adapt$) + " рублей."
alert(message); 
*/
//Для анимации цифр num - число на ввод, elem - куда будем записывать результат
$(document).ready(function(){
$(window).scroll(()=>{
	let scrollDistance = $(window).scrollTop();

	$(".section").each((i, el) => {
		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
			$("nav a").each((i, el) => {
				if($(el).hasClass("active")){
					$(el).removeClass("active");
				}	
			});
			$('nav li:eq('+ i +')').find('a').addClass('active');
		}
	});
});
});

$('a[href="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 120 + "px"});
});


window.onload = function(){
    document.querySelector('.loader').style.display = 'none';
}


const time = 300;
const step = 100;

function outNum(num, elem){
	let l = document.querySelector('#'+ elem);
	let n = 0;
	let t = Math.round(time/(num/step));
	let interval = setInterval(() => {
		n = n + step;
		if (n==num){
			clearInterval(interval);
		}
		l.innerHTML=n;
	},
		t);
}



var TotalPrice = 0;

var TypePrice = 0;
var DesignPrice = 0;
var AdaptabilityPrice = 0;

var TypeTime = 0;
var DesignTime = 0;
var AdaptabilityTime = 0;

function fun1() {
  	var type = document.getElementById("Type1");
  	TypePrice = parseInt(type.options[type.selectedIndex].value);
  	TypeTime = 1;

	document.getElementById("Time1").innerHTML = TypeTime + DesignTime + AdaptabilityTime + " день.";
	
	/*Баг, если прожать в трёх селектах выберете пункт. Анимация прокрутки числа выйдет на бесконечность.
	Когда выбираешь опцию, счётчик каждый раз крутит с нуля.
	Баг, если выбрать дизайн и адапт, а затем вновь тип, то будет написано 3 "день", а не дней*/
  	
	outNum(TypePrice + DesignPrice + AdaptabilityPrice, 'out-1');

  	console.log(TypePrice);
}

function fun2() {
	var design = document.getElementById("Design1");
  	DesignPrice = parseInt(design.options[design.selectedIndex].value);
	DesignTime = 1;

	document.getElementById("Time1").innerHTML = TypeTime + DesignTime + AdaptabilityTime + " дня.";
	

	outNum(TypePrice + DesignPrice + AdaptabilityPrice, 'out-1');
  	
  	console.log(DesignPrice);
}

function fun3() {
	var adaptability = document.getElementById("Adaptability1");
  	AdaptabilityPrice = parseInt(adaptability.options[adaptability.selectedIndex].value);
  	AdaptabilityTime = 1;

  	document.getElementById("Time1").innerHTML = TypeTime + DesignTime + AdaptabilityTime + " дня.";

	outNum(TypePrice + DesignPrice + AdaptabilityPrice, 'out-1');

  	
  	console.log(AdaptabilityPrice);
}




