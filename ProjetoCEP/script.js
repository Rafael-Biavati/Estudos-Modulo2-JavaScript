function buscarCep(){
    let exibir = document.getElementById("result");
    exibir.innerHTML = "Cidade: Campinas"
    + "<br>" +"Bairro: jardim itapevi"
    + "<br>" +"Endereço: Rua Marcos Penteado"
    + "<br>" +"Estado: São Paulo"
    + "<br>" +"DDD: 019";

    let mapa = document.getElementById("mapa");
    mapa.style.display = "flex";
}