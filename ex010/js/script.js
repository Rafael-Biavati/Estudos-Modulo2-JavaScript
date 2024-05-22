//metodos para arrays

const pessoa = ["Luiz", "Pereira", 40, "Professor"];

const lista1 = ["leite", "ovos", "pao", "queijo"];
const lista2 = ["suco", "refrigerante", "carne"];

const numeros = [1,2,3,4,5,6,10,43,7,8,12,11,23];

//join
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

//pop - remove o ultimo
//pessoa.pop();
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

//push - adiciona na ultima posição
//pessoa.push("Professor");
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

//shift - remove o primeiro item
//pessoa.shift();
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

//unshift - adiciona na primeira posição
//pessoa.unshift("item01")
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

//delete = deleta mantendo a posição undefined
//delete pessoa[0];
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

//splice - insere/remove item de uma determinada posição
//pessoa.splice(0,0,"item01","item02","item03");
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

//concat - unir vetores
//const lista3 = lista1.concat(lista2);
//document.getElementById("teste").innerHTML = lista3.join(" - ");

//slice - fatiar o vetor partindo de uma posição até determinada posição
//const div = lista1.slice(1,3);
//document.getElementById("teste").innerHTML = div.join(" - ");

//sort - ordem alfabetica
//const ordem = lista2.sort();
//document.getElementById("teste").innerHTML = ordem.join(" - ");

//reverse - inverte o vetor
/*const ordem = lista2.sort();
ordem.reverse();
document.getElementById("teste").innerHTML = ordem.join(" - "); */

//numeros em ordem crescente
//numeros.sort(function(a,b){return a-b});
//document.getElementById("teste").innerHTML = numeros.join(" - ");

//numeros em ordem decrescente
//numeros.sort(function(a,b){return b-a});
//document.getElementById("teste").innerHTML = numeros.join(" - ");

//maior numero
/*function maiorNum(array){
    return Math.max.apply(null, array)
}
document.getElementById("teste").innerHTML = maiorNum(numeros); */

//menor numero
/*function menorNum(array){
    return Math.min.apply(null, array)
}
document.getElementById("teste").innerHTML = menorNum(numeros); */

//filter - filtar numeros
/*function filtragem(value,index, array){
    return value > 10;
}
document.getElementById("teste").innerHTML = numeros.filter(filtragem);*/