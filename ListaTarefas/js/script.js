let count = 0;
let input = document.getElementById("tarefaTxt");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

// Carregar tarefas do localStorage quando a página for carregada
document.addEventListener("DOMContentLoaded", initialize);

// Adiciona uma nova tarefa à lista
function addTarefa(text = "", completed = false) {
    let valorInput = text || input.value;

    if (valorInput !== "") {
        ++count;
        let novaTarefa = {
            id: count,
            text: valorInput,
            completed: completed
        };
        
        // Adicionar ao localStorage
        let tarefas = loadFromLocalStorage();
        tarefas.push(novaTarefa);
        saveToLocalStorage(tarefas);

        renderTarefa(novaTarefa);
        
        input.value = "";
        input.focus();
    }
}

// Renderiza uma tarefa na lista
function renderTarefa(tarefa) {
    let itemClass = tarefa.completed ? "item check" : "item";
    let iconClass = tarefa.completed ? "mdi-check-circle" : "mdi-circle-outline";

    let novaTarefaHTML = `<div id="${tarefa.id}" class="${itemClass}">
        <div onclick="marcarTarefa(${tarefa.id})" class="item-icone">
            <span id="icone_${tarefa.id}" class="mdi ${iconClass}"></span>
        </div>
        <div onclick="marcarTarefa(${tarefa.id})" class="item-nome">${tarefa.text}</div>
        <div class="item-botao">
            <button onclick="deletar(${tarefa.id})" class="delete"><span class="mdi mdi-delete"></span> Deletar</button>
        </div>
    </div>`;
    
    main.innerHTML += novaTarefaHTML;
}

// Marca ou desmarca uma tarefa como concluída
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var icone = document.getElementById("icone_" + id);
    
    if (item.classList.contains("check")) {
        item.classList.remove("check");
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    } else {
        item.classList.add("check");
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");
        item.parentNode.appendChild(item);
    }

    // Atualizar localStorage
    let tarefas = loadFromLocalStorage();
    tarefas = tarefas.map(tarefa => {
        if (tarefa.id === id) {
            tarefa.completed = !tarefa.completed;
        }
        return tarefa;
    });
    saveToLocalStorage(tarefas);
}

// Remove uma tarefa da lista
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();

    // Atualizar localStorage
    let tarefas = loadFromLocalStorage();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    saveToLocalStorage(tarefas);
}

// Salva as tarefas no localStorage
function saveToLocalStorage(tarefas) {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Carrega as tarefas do localStorage
function loadFromLocalStorage() {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
}

// Inicializa a lista de tarefas carregando do localStorage
function initialize() {
    const tarefas = loadFromLocalStorage();
    tarefas.forEach(tarefa => {
        if (tarefa.id > count) {
            count = tarefa.id;
        }
        renderTarefa(tarefa);
    });
}

// Tecla Enter adiciona uma nova tarefa
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        btnAdd.click();
    }
});
