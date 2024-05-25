

class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    andar(){
        return this.modelo+ " esta andando..."
    }
}




const uno = new Carro("fiat","uno",2001);
const celta = new Carro("chevrolet","celta",2012);

console.log(uno)
console.log(uno.marca)
console.log(uno.modelo)
console.log(uno.ano)
console.log(uno.andar())
console.log(celta.andar())