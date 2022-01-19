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

//Замануха))
function TimeOut(){
	setTimeout(function(){
		$('#ModaL').modal('show');
	}, 5000);
}
$(document).ready(function(){
	TimeOut();
});


//Подсвечивать активное меню
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
$( "section" ).each(function( index ) {
  	console.log( index + ": " + $( this ).text() );
});

//Отложенная анимация Текст
$(document).ready(function(){
	let options = {threshold:[0.5]};
	let observer = new IntersectionObserver(onEntry1, options);
	let elements = $('.element-animation');
	elements.each((i, el) => {
		observer.observe(el); //Даём обсёрверу элемент для слежки

	});
});
function onEntry1(entry1) { //функция принимает всю информацию об элементе слежки
	entry1.forEach(change => {
		if(change.isIntersecting){
			change.target.classList.add('show-animation');
		}
	});
}

//Отложенная анимация Картинки  ???
$(document).ready(function(){
	let options = {threshold:[0.5]};
	let observer = new IntersectionObserver(onEntry2, options);
	let elements = $('.Anim');
	elements.each((i, el) => {
		observer.observe(el);
	});
});
function onEntry2(entry2) {
	entry2.forEach(change => {
		if(change.isIntersecting){
			change.target.src = change.target.dataset.src;
		}
	});
}
//Отложенная анимация Немного статистики
$(document).ready(function(){
	let options = {threshold:[0.5]};
	let observer = new IntersectionObserver(outNum1, options);
	let elements = $('.Option2 b');
	elements.each((i, el) => {
		observer.observe(el);
	});
});
//Функция выполняется каждый раз, когда мы вновь видим эти элементы.
//В добавок, она перезаписывает цифры, которые успели увидеть в последний раз.
const time1 = 1000;
const step1 = 1;
let k=true;
function outNum1(a){
	a.forEach(b =>{	
		if(b.isIntersecting & k==true){
			k = false;	
			console.log(b.target);
			
				$('b').each(function(){
					$(this).prop('Anim', 0).animate({
						Counter: $(this).text()
					},{
						duration: 1000,
						easing: 'swing',
						step: function(now){
							$(this).text(Math.ceil(now));
						}
					});
				});
				


				
		}
	});
}	


$(".Option2 b").each(function( index ) {
  	console.log( index + ": " + $( this ).text() );
});

/*
$('b').each(function(){
	$(this).prop('Anim', 0).animate({
		Counter: $(this).text()
	},{
		duration: 2000,
		easing: 'swing',
		step: function(now){
			$(this).text(Math.ceil(now));
		}
	});
});


$('.Option2 b').each((i, el) => {
				console.log(i);
				console.log($(el).text());
				console.log($(el).attr('id'));

});
*/
//outNum($(el).text(), $(el).attr('id'));

//Магнифик
$(document).ready(function() {
  	$('.image-link').magnificPopup({type:'image'});
});

//Для анимации цифр num - число на ввод, elem - куда будем записывать результат
const time = 1000;
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
		l.innerHTML=n + " рублей.";
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

//Отзывы
$(function(){
	$('.rev_slider').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
	});
});

//Маски на эмайл, телефон
$(document).ready(function(){
	$("#inputTel").mask("+7(999) 999-99-99");
	$('form').submit(function(event){
		if($("#inputTel").val()=="" || $("#inputEmail3").val()==""){
			event.preventDefault();
			alert("Введите Email и телефон");
		}
	});
});

//Аякс
$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		$.ajax({
			type:"POST",
			url:"php/mail.php",
			data:$(this).serialize(),
		}).done(function(){
			$(this).find("input").val("");
			alert("Успешно отправлено!");
			$("form").trigger("reset");
		});
		return false;
	});
});