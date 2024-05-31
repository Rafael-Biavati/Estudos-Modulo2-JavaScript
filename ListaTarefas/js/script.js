let count = 0;
let input = document.getElementById("tarefaTxt");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

// Carregar tarefas do localStorage
document.addEventListener("DOMContentLoaded", inicializar);

// Adiciona uma nova tarefa
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
        let tarefas = carregarDoLocalStorage();
        tarefas.push(novaTarefa);
        salvarNoLocalStorage(tarefas);

        renderTarefa(novaTarefa);
        
        input.value = "";
        input.focus();
    }
}

// Insere uma tarefa
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
    let tarefas = carregarDoLocalStorage();
    tarefas = tarefas.map(tarefa => {
        if (tarefa.id === id) {
            tarefa.completed = !tarefa.completed;
        }
        return tarefa;
    });
    salvarNoLocalStorage(tarefas);
}


function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();

    let tarefas = carregarDoLocalStorage();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    salvarNoLocalStorage(tarefas);
}

function salvarNoLocalStorage(tarefas) {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarDoLocalStorage() {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
}

// Inicializa a lista de tarefas carregando do localStorage
function inicializar() {
    const tarefas = carregarDoLocalStorage();
    tarefas.forEach(tarefa => {
        if (tarefa.id > count) {
            count = tarefa.id;
        }
        renderTarefa(tarefa);
    });
}

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        btnAdd.click();
    }
})