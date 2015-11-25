"use strict"

//START TASK1


$(document).ready(function() {
		$("[href*='tp://']").not("[href*='://internal']").addClass("external");
	}
);

(function task1_2() {
	var list = document.querySelectorAll("[href*='tp://']:not([href*='://internal'])");
	for (var i = 0; i < list.length; i++) {
		list[i].classList.add("external");
	};
}());

// END TASK1



// START TASK2
function createCalendar (id, year, month) {
  
	var div = document.getElementById(id),
	    table = document.createElement("table"),
	    days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
	    date = new Date(year, month-1), tr, td,
	    dayAmount;     
	 
	function createHeader(){
	  for(var i = 0; i < days.length; i++) {
			var th = document.createElement("th");
	    th.innerHTML = days[i];
	    table.appendChild(th);
	  }
	};

	function createBody() {

	// Create top line with space
	  tr = document.createElement("tr");
	  for (var i = 1; i < getDayWeek(date); i++) {
	    td = document.createElement("td");
	    td.innerHTML = "";
	    tr.appendChild(td);
	  };

	// Create all TD with numbers
	 var start = 1, 
	 end = getDaysInMonth(year, month);
	 
	  while (start <= end) {
	          td = document.createElement('td');
	          td.innerHTML = start;
	          tr.appendChild(td);
	          if (tr.children.length == 7) {
	              table.appendChild(tr);
	              tr = document.createElement('tr');
	          };
	          start++;
	   }
	  
	 /* Add TD without value to the bottom*/
	  var max = 7 - tr.children.length;
	  for (var j = 0; j < max; j++) {
	    td = document.createElement('td');
	          td.innerHTML = "";
	    tr.appendChild(td);
	  }
	  table.appendChild(tr);
	  /*END CREATE FOOTER*/
	  
	}

	function getDaysInMonth(year, month){
	  
	  return (new Date(year, month, 0)).getDate();
	}

	function getDayWeek(date) {
	    var dayWeek = date.getDay();
	    if ( dayWeek == 0) {
	      return dayWeek = 7;
	    };
	    return dayWeek;
	}

	createHeader();
	createBody();
	div.appendChild(table);
}

createCalendar("cal", 2015 , 11);

// END TASK2