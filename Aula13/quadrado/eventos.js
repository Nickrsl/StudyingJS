// EVENTOS -> ações feitas majoritariamente pelo usuário

// click -> clicar no mouse
// dblclick-> duplo clik no mouse
// mouseover -> mover o ponteiro do mouse sobre o elemento
// mouseout -> mover o ponteiro do mouse fora do elemento
// keydown -> Apertar o botão 
// keyup -> Soltar o botão
// submit -> submeter os dados de um formulário
// change -> alterar o valor de um campo de formulário
// focus -> evento acionado quando o foco está sobre o elemento

const quadrado = document.querySelector("#quadrado");

console.log({quadrado});

//Primeira forma de aplicar
quadrado.onclick = () => {
    quadrado.style.backgroundColor = "#003049"
    quadrado.style.transform = "translateY(200px)";
}

quadrado.ondblclick = () => {
    quadrado.style.transform = "translateY(0)"
    quadrado.style.backgroundColor = "#0d63cb";
}

//Segunda forma de aplicar: inline (menos utilizada)
function changeColorSquare() {
    quadrado.style.backgroundColor = "#219ebc";
}

//Terceira forma de aplicar(mais utilizada)
quadrado.addEventListener("mouseout", () => {
    quadrado.style.backgroundColor = "#f07167";
});