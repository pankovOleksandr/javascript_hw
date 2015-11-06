"use strict"

function sumArgs() {
  return [].reduce.call(arguments, function(a,b) {
    return a+b;});
};

function applyAll(){
  var func = arguments[0],
      arg = [].slice.call(arguments, 1);
  
  return func.apply(null, arg);
}

function makeCaching(f) { 
  var cash = {};
  return function() {
    if( arguments[0] in cash ) {
      return cash[ arguments[0] ];
    } else {
      return cash[ arguments[0] ] = f.apply(this, arguments);
    };    
  };
};