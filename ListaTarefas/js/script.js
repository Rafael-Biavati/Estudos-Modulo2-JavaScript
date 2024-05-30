let count = 0;
let input = document.getElementById("tarefaTxt");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined )){
        ++count;
        let novaTarefa = `<div id="${count}" class="item">
        <div onclick="marcarTarefa(${count})" class="item-icone">
            <span id="icone_${count}" class="mdi mdi-circle-outline"></span>
        </div>
        <div onclick="marcarTarefa(${count})" class="item-nome">${valorInput}</div>
        <div class="item-botao">
            <button onclick="deletar(${count})" class="delete"><span class="mdi mdi-delete"></span> Deletar</button>
        </div>
    </div>`;
        main.innerHTML += novaTarefa;
        input.value = "";
        input.focus();
        
    }
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class")
    if(classe == "item"){
        item.classList.add("check");
        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove("check");
        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");

    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove("");
}

//tecla enter adiciona uma nova tarefa
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        btnAdd.click();
    }
});
