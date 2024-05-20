

const carro = {
montadora:"ford", 
modelo:"fiesta",
ano:2015,
placa:"ABC-1234", 
ligar: function(){console.log("o carro esta ligado")},
completo: function(){return (this.montadora + " " + this.modelo  + " - " + this.ano)}
}; //objeto literal

let camiseta = {tamanho:"",cor:"",preco:"", detalhar: function(){return ("Cor: " + this.cor) + " Preço: " + this.preco+ " Tamanho: " + this.tamanho} };

camiseta.cor = "preta";
camiseta.preco = 39.90;
camiseta.tamanho = "P";


console.log(carro.completo());
console.log(carro.ligar());
console.log(camiseta.preco);
console.log(camiseta.tamanho);
console.log(camiseta.cor);
console.log(camiseta.detalhar());