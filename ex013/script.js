let hoje = new Date();
let vencimento = new Date(2024,0, 15); //15/01/2024


if(hoje > vencimento){
    console.log("conta vencida");
}else{
    console.log("ainda nao venceu");
}

var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31)

var diferençaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferençaTempo/(24*60*60*1000));

console.log(diferencaDias)

