
"use strict"

// TASK 1

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function fib(n) {
	if (n <= 1) {
		return n;
	} else {
		return result = fib(n-1) + fib(n-2);
	}
}

function task1(num) {
	num = prompt('Enter a number', 3);
	if( isNumeric(num) ) {
		console.log( fib(num) );
	} else {
		task1();
	}
}

//   TASK2

function checkSpam(string) {
	var word1 = 'spam',
		word2 = 'sex';
	if ( (string.toLowerCase().indexOf(word1) > -1) || (string.toLowerCase().indexOf(word2) > -1)) {
		return true;
	} else {
		return false;
	}
}

function task2() {
	console.log (checkSpam('get new Sex videos'));
	console.log (checkSpam('[SPAM] How to earn fast money?'));
	console.log (checkSpam('New PSD template'));
}

// TASK 3

//Проверяем длину и обрезаем при необходимости
function cutString (s, length) {
	return s.length > length ? s.slice(0, length) : s;
}
// Добавляем в конец строки символы
function addSymbols (string, symb) {
	return string + symb;
}

function task3(string, length) {
	string = prompt("enter a string");
	length = prompt("enter nesseccary length of string");
	console.log( addSymbols(cutString(string, length), '...') );
}