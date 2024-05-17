let modal = document.getElementById("meuModal");
var closeBtn = document.getElementById("btnFechar")
var projeto1 = document.getElementById("projeto1")
var projeto2 = document.getElementById("projeto2")

projeto1.addEventListener("click", function() {
    abrirModal(
        'Projeto Hotel', 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque at laborum accusamus odit odio repudiandae aliquid blanditiis facere minima illo distinctio magni ipsa impedit deleniti, harum quisquam fugiat! Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, explicabo corrupti illo, eveniet fuga totam officia hic iste recusandae dolores, modi minima repellat delectus? Impedit, nobis? Eveniet exercitationem sint animi.', 
        '10/10/2010', 
        'https://rafael-biavati.github.io/Estudo-Flexbox/projeto-flexbox/', 
        'https://github.com/Rafael-Biavati/Estudo-Flexbox/tree/main/projeto-flexbox','<iframe width="560" height="315" src="https://www.youtube.com/embed/VKmPGmFY7H4?si=VZvsAKTlynyBbc1p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' );
});


projeto2.addEventListener("click", function() {
    abrirModal(
        'Projeto Fotografo',
        'Texto teste para projeto 2, alterando via parametro de função, teste teste teste teste teste Texto teste para projeto 2, alterando via parametro de função, teste teste teste teste teste Texto teste para projeto 2, alterando via parametro de função, teste teste teste teste teste',
        '20/01/2020',
        'https://rafael-biavati.github.io/Estudo-Flexbox/projeto-flexbox/',
        'https://github.com/Rafael-Biavati/Estudo-Flexbox/tree/main/projeto-flexbox',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/VKmPGmFY7H4?si=VZvsAKTlynyBbc1p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' );
});



/*function abrirModal(){
    modal.style.display = "flex";
}*/

function abrirModal(titulo, descricao, data, linkProjeto, linkCodigo, linkVideo){
    modal.style.display = "flex";
    
    // Define o conteúdo do modal baseado nos parâmetros passados
    document.getElementById("video").innerHTML = linkVideo;
    document.getElementById("titulo").innerText = titulo;
    document.getElementById("descricao").innerText = descricao;
    document.getElementById("data").innerText = data;
    document.getElementById("linkProjeto").href = linkProjeto;
    document.getElementById("linkCodigo").href = linkCodigo;
}


closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }