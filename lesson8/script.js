"use strict"

function task1() {
    var ladder = {
      step: 0,
      up: function() { // вверх по лестнице
        this.step++;
        return this;
      },
      down: function() { // вниз по лестнице
        this.step--;
        return this;
      },
      showStep: function() { // вывести текущую ступеньку
        alert( this.step );
      }
    };

    ladder.up().up().down().up().down().showStep();
}

function task2() {
    function Calculator() {

        var operations = {
          "+" : function(a, b) {
                  return a + b;
                }
        };

        this.calculate = function(str) {

          var arr = str.split(" "),
          num1 = +arr[0],
          num2 = +arr[2],
          oper = arr[1];

          if ( isNaN(num1) || isNaN(num2) || !operations[oper]) {

            return console.log("Неверный формат ввода");

          };
          
        return operations[oper](num1, num2);

        };

        this.addMethod = function(oper, func) {
          operations[oper] = func;
        };

    };

  var calc = new Calculator();

  console.log( calc.calculate('3 + 7') );

  var powerCalc = new Calculator;
    powerCalc.addMethod('*', function(a, b) {
      return a * b;
    });

  powerCalc.addMethod('/', function(a, b) {
      return a / b;
    });

  powerCalc.addMethod('**', function(a, b) {
      return Math.pow(a, b);
    });

  var result = powerCalc.calculate('2 ** 3');
    console.log( result ); // 8
};


function task3() {

  function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, "firstName", {

    get : function() {
      return this.fullName.split(" ")[0];
    },

    set : function(str) {
      var fullNameArr = this.fullName.split(" ");
      fullNameArr[0] = str;
      return this.fullName = fullNameArr.join(" ");
    }
  });

    Object.defineProperty(this, "lastName", {

      get : function() {
        return this.fullName.split(" ")[1];
      },

      set : function(str) {
        var fullNameArr = this.fullName.split(" ");
          fullNameArr[1] = str;
          return this.fullName = fullNameArr.join(" ");
      }
    });
  };

  var vasya = new User('Александр Пушкин');

  // чтение firstName/lastName
  console.log( vasya.firstName ); // Александр
  console.log( vasya.lastName ); // Пушкин

  // запись в lastName
  vasya.lastName = 'Толстой';

  console.log( vasya.fullName ); // Александр Толстой

};


function task4() {
  
  function Article() {

    this.created = new Date();
    Article.lastCreated = this.created;
    Article.count++;
  };

  Article.showStats = function() {
        console.log("Всего:" + this.count + " Последняя дата:" + this.lastCreated);
  };

  Article.count = 0;

  new Article();
  new Article();
  Article.showStats(); // Всего: 2, Последняя: (дата)

  setTimeout(function(){new Article();}, 3000);

  setTimeout(function(){Article.showStats();},5000);

};