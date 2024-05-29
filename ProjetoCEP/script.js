document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCep').addEventListener('click', buscarCep);
});


const buscarCep = () => {
    
    const cep = document.getElementById('cep').value.replace('-', '');
    
    //solicitação API ViaCEP para obter info sobre o CEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json()) // Converte em JSON
        .then(local => {
            if (!local.erro) {
                // Cria uma string com o endereço formatado
                let endereco = `${local.logradouro}, ${local.localidade}, ${local.uf}, Brasil`;
                buscarCoordenadas(endereco);
        
                // Exibe o endereço
                document.getElementById("result").innerHTML = 
                "Cidade: " + local.localidade + "<br>" + 
                "Estado: " + local.uf + "<br>" + 
                "Bairro: " + local.bairro + "<br>" + 
                "Endereço: " + local.logradouro

            } else {
                alert('CEP não encontrado.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Por favor, tente novamente.');
            document.getElementById("mapa").style.display = "none";
            document.getElementById("cep").value = "";
            document.getElementById("cep").focus();
            document.getElementById("result").innerHTML = "";
        });
};

// Função para buscar as coordenadas usando a API nominatim
const buscarCoordenadas = (endereco) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${endereco}`)
        .then(response => response.json()) // Converte em JSON
        .then(data => {
            if (data && data.length > 0) {
                // Obtém latitude e longitude do resultado
                const { lat, lon } = data[0];
    
                // Chama a função para exibir o mapa
                exibirMapa(parseFloat(lat), parseFloat(lon));
            } else {
                alert('Endereço não encontrado.');
            }
        })
        .catch(error => {
            // Lida com erros na solicitação à API Nominatim
            console.error('Erro ao buscar coordenadas:', error);
            alert('Erro ao buscar coordenadas do endereço. Por favor, tente novamente.');
        });
};


let mapa;
const exibirMapa = (latitude, longitude) => {
    const mapaDiv = document.getElementById("mapa");
    
    //div mapa inicialmente com display: none
    mapaDiv.style.display = "flex"; 

    // Remove o mapa anterior, se existir
    if (mapa) {
        mapa.remove();
    }


    // Inicializa o mapa com as coordenadas e um zoom(15)
    mapa = L.map('mapa').setView([latitude, longitude], 15);

    // Adiciona tiles ao mapa gerando o mapa completo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

    // Adiciona um marcador no mapa
    L.marker([latitude, longitude]).addTo(mapa);
};
