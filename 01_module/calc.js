// Criando módulos que podem ser requisitado e ter retorno de uma função

var operationSum =  require("./function/sum");
var operationSub = require("./function/sub")
var operationDiv = require("./function/div")
var operationMulti = require("./function/multi")

console.log(operationSum(2,2));
console.log(operationSub(4,5));
console.log(operationDiv(10,2));
console.log(operationMulti(13,5));
