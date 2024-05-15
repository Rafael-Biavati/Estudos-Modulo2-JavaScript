// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o botão de fechar
var closeBtn = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal
function openModal() {
  modal.style.display = "flex";
}

// Quando o usuário clicar no botão de fechar, feche o modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Se o usuário clicar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
