"use strict"

function task1() {
	var obj = {
		  className: 'my menu menu'
		};
	removeClass(obj, 'menu');
	console.log(obj.className);

	function removeClass(obj, cls) {
		var classArr = obj.className.split(" ");
		for (var i = 0, max = classArr.length; i < max; i +=1) {
			if (classArr[i] == cls) {
			classArr.splice(i, 1);
			i -= 1;
			}
		}
		obj.className = classArr.join(" ");
	}
}

function task2() {
	var arr = ['HTML', 'JavaScript', 'CSS'],
		arrSorted = [];
	arrSorted = arr.slice().sort();
	return console.log("arr : " + arr + "\narrsorted : " + arrSorted);
}

function task3() {
	var arr = [1, 2, 3, 4, 5];
	console.log( arr.sort( function(){
		return (Math.random() < 0.5) ? -1 :1;
	} ) );	
}

function task4() {
	var vasya = { name: 'Вася', age: 23 };
	var masha = { name: 'Маша', age: 18 };
	var vovochka = { name: 'Вовочка', age: 6 };

	var people = [ vasya , masha , vovochka ];

	function objectSort(arr) {
		return arr.sort( function(a,b) {
			return a.age > b.age;
		} );
	}
	
	console.log( objectSort(people) );
}

function task5() {
	console.log(isPal('Anna')); // true
	console.log(isPal('Вася')); //false
	console.log(isPal('12321')); //true
	console.log(isPal('123212')); //false
	console.log(isPal('А роза упала на лапу Азора')); //true

	function isPal(string) {
		var str, 
			strReversed;

		str = string.toLowerCase().split(" ").join("");
		strReversed = str.split("").reverse().join("");
		if (str === strReversed) {
			return true;
		} else {
			return false;
		}
	}
}

function task6() {
	var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
	console.log( unique(strings) );

	function unique(arr) {
		var result = [],
			obj = {};

		for (var i = 0; i < arr.length; i++) {
			obj[ arr[i] ] = arr[i]; 
		};
		return result = Object.keys(obj);
	}
}

function task7() {
	var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
	console.log(anClean(arr));

	function anClean(arr) {
		var obj = {},
			result = [];

		for (var i = 0; i < arr.length; i++) {
			obj[ arr[i].toLowerCase().split("").sort().join("") ] = arr[i];
		};

		for (var key in obj) {
			result.push(obj[key]);
		}
		
		return result;
	}
}