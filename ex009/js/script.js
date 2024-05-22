//array
let meuArray = ["item1","item2"]

meuArray[2] = function soma(a,b){
    return a+b;
}
let meuArray2 = ["item1","item2"]
meuArray[3] = meuArray2;
let meuObj = {nome: "Felipe", idade: 20}
meuArray[4] = meuObj;

meuArray.push(999);
meuArray.push(function sub(a,b){return a-b});


//função dentro do array
console.log("---------Soma--------");
console.log(typeof(meuArray[2]));
console.log(meuArray[2]);
let resultado = meuArray[2](3, 4); 
console.log(resultado); 

//função dentro do array
console.log("--------Subtração---------");
console.log(typeof(meuArray[6]));
console.log(meuArray[6]);
console.log(meuArray[6](7, 4));

console.log("--------Vetor---------");
console.log(typeof(meuArray[3]));
console.log(meuArray[3][0])
console.log(meuArray[3][1])

//objeto dentro do array
console.log("--------Objeto---------");
console.log(typeof(meuArray[4]));
console.log(`Nome: ${meuArray[4].nome}`);
console.log(`Idade: ${meuArray[4].idade}`);

console.log("---------Geral--------");

for(let i = 0;i<meuArray.length;i++){
    console.log(`vetor na posição ${i+1}: ${typeof(meuArray[i])}`)
}

console.log("Tamanho do vetor:" + meuArray.length)


