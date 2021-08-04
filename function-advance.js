function aluCalculation(taka){
console.log('Alu den kg', taka);
var unitPirce=10;
var amiPbao=taka/unitPirce;
return amiPbao;
}

var totalPrice=200;
var taholePacchi= aluCalculation(totalPrice)

console.log('tahole ami pacchi et kg',taholePacchi);