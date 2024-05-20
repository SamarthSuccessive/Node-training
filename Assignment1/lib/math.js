const _ = require('lodash');

function add(num1, num2) {
    return _.add(num1, num2);
  }
  
  function sub(num1, num2) {
    return _.subtract(num1, num2);
  }
  
  function mult(num1, num2) {
    return _.multiply(num1, num2);
  } 
  
  function div(num1, num2) {
    return _.divide(num1, num2);
  }

  module.exports ={add,sub,mult,div};