let modal = document.getElementById("meuModal");
var closeBtn = document.getElementById("btnFechar")



function abrirModal(){
    modal.style.display = "flex";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }