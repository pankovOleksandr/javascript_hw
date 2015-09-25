function getNum() {
	do{
	var num = prompt('Введите число больше 100');
    } while (num !== null && num <= 100);
}

function getSimpleNumbers (start, end) {
	start = +prompt('Enter start number', 2);
	end = +prompt('Enter end number', 10);
    next:
    for (var i = start; i <= end; i++) {
		for (var j = 2; j < i; j++) {
			if (i % j == 0) {
				continue next;
			}
		};
		console.log(i);
	}
}

function fizzBuzz(start, end) {
	start = 1;
	end = 100;
	for (var i = start; i <= end; i++) {
		if (i % 3 == 0) {
			console.log('Fizz');
		} else if (i % 5 == 0) {
			console.log('Buzz');
		} else {
		console.log(i);
		};
	};
}

function fizzBuzzModified (start, end) { 
	start = 1;
	end = 100;
	for (var i = start; i < end; i++) {
		if ( (i % 3 == 0) && (i % 5 == 0) )  {
			console.log('Число ' + i +' делится на числа 3 и 5: ' + 'FizzBuzz');
		}
	}
}


// function drawDesk (size, el) {
// 	size = +prompt('Введите число для размера доски', 8);
// 	el = '#';
// 	var result = "";
// 	for (var row = 0; row < size; row++) {	
// 		for (var column = 0; column < size; column++) {
// 			result += el;
// 			el === ' ' ? el = "#" : el = ' ';
// 		};
// 	result += '\n';
// 	el === ' ' ? el = "#" : el = ' ';
// 	};

// 	console.log(result);
// }

// ERROR - work only for even size

function drawDesk (size, el) {
	size = +prompt('Введите число для размера доски', 8);
	el = '#';
	var result = "";
	for (var row = 0; row < size; row++) {	
		for (var column = 0; column < size; column++) {
			if ( (row + column) % 2 === 0) {
				result += " ";
			} else {
				result += el;
			};
		};
	result += '\n';
};

	console.log(result);
}
function pow(x, n) {
	x = +prompt('Введите число, взводимое в степень');
	n = +prompt('Введите в какую степень возводить число '+x);
	var result = 1;
	for (var i = 0; i < n; i++) {
		result *= x; 
	};
	alert(n + '-ая степень числа ' + x + ' равна ' + result);
}