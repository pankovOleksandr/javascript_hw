function task1() {
	var year = +prompt('Какой сейчас год?');

	if (year==2015) {
	  alert('You are right');
	} else {
	  alert('Have you fallen from the Moon? It is 2015');
	};

};

function task2() {
	var number = +prompt('Enter default number');
	if (number > 0) {
		alert('1');
	} else if (number < 0) {
		alert('-1');
	} else {
		alert('0');
	};
};

function task3() {
	var log = prompt('Enter your login');
	if (log === 'admin') {
		var pass = +prompt('Enter your password');
		if (pass === 'passw0rd') {
			alert('Welcome home');
		} else if (pass === null) {
				alert('Canceled');
		} else {
				alert('Wrong password');
			};
	} else if (log === null) {
		alert('Canceled');
	} else {
		alert('Access denied');
	};
};

function task4() {
	var el = document.getElementById('task4');
	function task_4() {
		var a =1, b = 2;
		((a + b) >= 3) ? result = 'Yep' : result = 'Noup!';
	}
	el.innerHTML = task_4;
}

function task5() {
	function task_5() {
		var name = 'admin', text;
		(name == 'admin') ? text = 'Hi' : (name == 'manager') ?
			text = 'Hello' : (name == '') ?
				text = 'No login' : text = '';
	};
	document.getElementById('task5').innerHTML = task_5;
}

