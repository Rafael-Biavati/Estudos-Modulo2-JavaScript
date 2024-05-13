
/*uso de array*/
var sequencia = [1, 1, 2, 3, 5, 8, 13];
var rand = ["tres", 795, [0, 1, 2]];

console.log(rand[2])

/*alteração em array multidimensional*/
rand[2][2] = 4
console.log(rand[2])
console.log("--------------------------")
/*split para dividir*/
let mString = "Brasil,Argentina,Colombia,Chile"
let mArray = mString.split(",")

console.log(`tipo: ${typeof mString}`)
console.log(`tipo: ${typeof mArray}`)
console.log(`Tamanho: ${mArray.length}`)
console.log(`Conteudo: ${mArray}`)
console.log(`Posição 0: ${mArray[0]}`)
console.log("--------------------------")

/*array para string*/
let novaString = mArray.join(",")
console.log(`Conteudo: ${typeof novaString}`)
console.log("--------------------------")

/*push e pop*/
let segundoArray = []
segundoArray.push("item01");
segundoArray.push("item02");
segundoArray.push("item03");
segundoArray.push("item04", "item05");

console.log(`${segundoArray}`);
segundoArray.pop()
console.log(`Ultimo posição removida: ${segundoArray}`);


/*unshift e shift*/
segundoArray.shift()
console.log(`primeira posição removida: ${segundoArray}`);
segundoArray.unshift("item01")
console.log(`primeira posição inserida: ${segundoArray}`);