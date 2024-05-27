


function buscarCep(){
    let entrada = document.getElementById("cep").value; 

    // Realiza a requisição GET
fetch("https://viacep.com.br/ws/"+ entrada +"/json/")
.then(response => {
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.statusText);
    }
    // Retorna a resposta em formato JSON
    return response.json();
})
.then(info => {
    document.getElementById("area").innerHTML = "<br>" +"Logradouro: "+ info.logradouro + "<br>" +"Bairro: "+ info.bairro + "<br>" +"Cidade: "+ info.localidade + "<br>" + "Estado: " +info.uf + "<br>" + "DDD: " + info.ddd
    
})
.catch(error => {
    document.getElementById("area").innerHTML = "<br>" + "CEP inválido";
    console.error('Erro:', error);
});
}



