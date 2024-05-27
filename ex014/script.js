const carro = {marca: "fiat",modelo: "uno", ano: 2001}



let texto = JSON.stringify(carro)
let objReconstruido = JSON.parse(texto)


document.getElementById("area").innerHTML = objReconstruido.marca + "-" + objReconstruido.modelo + "-" + objReconstruido.ano + " |||| JSON = " + texto;
