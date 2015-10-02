"use strict"

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function maxPlayer(obj) {
	var max = 0;
	var name='';
	for (var key in obj) {
		if (obj[key] > max) {
			max = obj[key];
			name = key;
		}
	};
	return name;
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
	var arr = [],
		num = 0,
		sum = 0;
	do {
		num = prompt("Введите число для заполнения массива", num);
		if (isNumeric(num)) {
			arr.push(+num);
		}
    } while (num !== null && num !== "");
    for (var i = 0; i < arr.length; i++) {
    	sum += arr[i];
    };

    return sum;
}
function task1() {
	var tasksCompleted = {
	  'Anna': 29,
	  'Serg': 35,
	  'Elena': 1,
	  'Anton': 99
	};
	console.log(maxPlayer(tasksCompleted));
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