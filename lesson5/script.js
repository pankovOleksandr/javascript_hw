"use strict"
// JUST WITHOUT TASK1 (coming soon-))



function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
	for (var key in obj) {
		if (isNumeric(obj[key])) {
			obj[key] *= 2;
		}
	}
	return obj;
}

function getNum() {
	var arr = [];
	var num = 0;
	do {
		num = prompt("Введите число для заполнения массива", num);
		if (isNumeric(num)) {
			arr.push(+num);
		}
    } while (num !== null && num !== "");
    return arr;
}

function task2() {
	var image = {
	    width: 100,
	    height: 400,
	    title: 'Cool image'
	};
	console.log(multiplyNumeric(image));
}

function task3() {
	console.log(getNum());
}