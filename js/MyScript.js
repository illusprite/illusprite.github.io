"use strict";

window.onload = function(){
    document.querySelector('.loader').style.display = 'none';
    
}
//Прокрутка
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("nav").offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}




//Попытка подсвечивать активное меню

//ПОЧЕМУ НЕ РАБОТАЕТ ААААА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

$(window).scroll(()=>{
	let scrollDistance = $(window).scrollTop();

	$("section").each((i, el) => {

		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
			$("nav a").each((i, el) => {
				if ($(el).hasClass("active")){
					$(el).removeClass("active");
				}
			});

			$('nav li:eq('+ i +')').find('a').addClass('active');
		}
	});
});



//Для анимации цифр num - число на ввод, elem - куда будем записывать результат
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




