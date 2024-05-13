let btn = document.querySelector("#btn")
let txt = document.querySelector("#txt")

btn.addEventListener("click", updateBtn);

function updateBtn(){
    if(btn.textContent === "Iniciar Maquina"){
        btn.textContent = "Parar Maquina"
        txt.textContent = "Maquina Iniciou"
    }else {
        btn.textContent = "Iniciar Maquina";
        txt.textContent = "A máquina está parada.";
      }
}