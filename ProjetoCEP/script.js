document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCep').addEventListener('click', buscarCep);
});

// Função principal que será chamada quando o botão for clicado
const buscarCep = () => {
    // Obtém o valor do campo de entrada de CEP e remove qualquer hífen
    const cep = document.getElementById('cep').value.replace('-', '');
    
    // Faz uma solicitação à API ViaCEP para obter informações sobre o CEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json()) // Converte a resposta em formato JSON
        .then(local => {
            // Verifica se o CEP não tem erros
            if (!local.erro) {
                // Cria uma string com o endereço formatado
                let endereco = `${local.logradouro}, ${local.localidade}, ${local.uf}, Brasil`;
                
                // Chama a função para buscar as coordenadas do endereço
                buscarCoordenadas(endereco);
                
                // Exibe o endereço no elemento com id "result"
                document.getElementById("result").innerHTML = 
                "Cidade: " + local.localidade + "<br>" + 
                "Estado: " + local.uf + "<br>" + 
                "Bairro: " + local.bairro + "<br>" + 
                "Endereço: " + local.logradouro

            } else {
                // Exibe um alerta se o CEP não for encontrado
                alert('CEP não encontrado.');
            }
        })
        .catch(error => {
            // Lida com erros na solicitação à API ViaCEP
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Por favor, tente novamente.');
            document.getElementById("mapa").style.display = "none";
            document.getElementById("cep").value = "";
            document.getElementById("cep").focus();
            document.getElementById("result").innerHTML = "";
            
        });
};

// Função para buscar as coordenadas geográficas de um endereço usando a API Nominatim (OpenStreetMap)
const buscarCoordenadas = (endereco) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${endereco}`)
        .then(response => response.json()) // Converte a resposta em formato JSON
        .then(data => {
            // Verifica se a resposta contém dados
            if (data && data.length > 0) {
                // Obtém latitude e longitude do primeiro resultado
                const { lat, lon } = data[0];
                
                // Chama a função para exibir o mapa com as coordenadas obtidas
                exibirMapa(parseFloat(lat), parseFloat(lon));
            } else {
                // Exibe um alerta se o endereço não for encontrado
                alert('Endereço não encontrado.');
            }
        })
        .catch(error => {
            // Lida com erros na solicitação à API Nominatim
            console.error('Erro ao buscar coordenadas:', error);
            alert('Erro ao buscar coordenadas do endereço. Por favor, tente novamente.');
        });
};

// Variável global para armazenar o mapa Leaflet
let mapa;

// Função para exibir o mapa com a localização específica
const exibirMapa = (latitude, longitude) => {
    // Obtém o elemento HTML onde o mapa será exibido
    const mapaDiv = document.getElementById("mapa");
    
    // Torna o div do mapa visível
    mapaDiv.style.display = "flex";

    // Remove o mapa anterior, se existir
    if (mapa) {
        mapa.remove();
    }

    // Inicializa o mapa Leaflet com as coordenadas e um nível de zoom



    //mapa = L.map('mapa').setView([latitude, longitude], 15);
    mapa = L.map('mapa').setView([latitude, longitude], 15);






    // Adiciona os tiles (camadas) do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);
    
    // Adiciona um marcador no mapa na posição especificada
    L.marker([latitude, longitude]).addTo(mapa);
};
