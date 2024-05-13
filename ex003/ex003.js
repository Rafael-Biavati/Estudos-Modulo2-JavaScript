let teste = "minha string"

/*varrendo uma String em cada posição*/
console.log(`${teste.length}`);
console.log(`${teste[0]}`);
console.log(`${teste[1]}`);
console.log(`${teste[2]}`);
console.log(`${teste[3]}`);
console.log(`${teste[4]}`);
console.log(`${teste[5]}`);

/*achando uma substring dentro de uma string */
if (teste.indexOf("minh") !== -1) {
    console.log("ordem de caracteres encontrada");
  }else{
    console.log("ordem de caracteres não encontrada");
  }
  console.log("----------------");
/*alterando uma string com replace */
  teste = teste.replace("minha", "sua");
  console.log(`String alterada por replace: ${teste}`)
