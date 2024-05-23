

var tempo; // Variável global para armazenar o intervalo
var intervalAtivo = false; // verifica se o intervalo está ativo

function ativarContagem() {
    if (!intervalAtivo) { // Verifica se o intervalo não está ativo
        tempo = setInterval(function() {
            var temporizador = document.getElementById("tempo").innerHTML;
            var soma = Number(temporizador) + 1;
            document.getElementById("tempo").innerHTML = soma;
        }, 1000);
        intervalAtivo = true; // Define a flag como ativa
    }
}

function pararContagem() {
    clearInterval(tempo);
    intervalAtivo = false; // Redefine quando o intervalo é parado
}





