//D.O.M. = Document Object Model
window.document // -> objeto que representa o documento html

//window.document.getElementById();
//window.document.getElementByClassName();
//window.document.getElementsByTagName();
//window.document.querySelector();
//podemos deixar o window oculto ->

// let h1 = document.getElementById("titulo");

// let paragrafos = document.getElementsByClassName("paragrafo");
// paragrafo[0].hidden = false;

// let negritos = document.getElementsByTagName("b");

// let campoEmail = document.querySelector("input[type=email]");

// let negritoParagrafo = document.querySelector("p b"); // muito usado hj em dia

// let negritosParagrafo = document.querySelectorAll("p b"); // muito usado hj em dia

titulo.align = "right";
titulo.title = "Título Principal";
titulo.style.color = "violet";
titulo.style.fontSize = "50px";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Assusto DOM JAVA"
console.log(paragrafo.innerHTML);

//console.log(h1); -> console.log não funciona no objeto document

let caixa = document.querySelector('#informe');
caixa.classList.add("erro");//adiciona uma classe
caixa.classList.remove("mensagem");//remove uma classe
caixa.classList.toggle("atencao");//adiciona se não existir
caixa.classList.toggle("atencao");//remove se existir
console.log(caixa);