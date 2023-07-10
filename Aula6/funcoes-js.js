// FUNCTION = rotina
/* 
Anatomia:
(definição)
let nome = valor
function nome () {
    comandos
}

(chamado)
nome da função ();
*/

let num1 = 10;
let num2 = 4;

function multiplicar() {
    console.log("primeiro número é "+ num1);
    console.log("segundo número é "+ num2);
    console.log("o produto de "+ num1 + " e " + num2 + " é igual a " + (num1*num2));
}

multiplicar();


//Funções prontas:
//é necessário o console.log(que também é uma função pronta de recebimento) para vermos o resultado 

//Biblioteca -> number

let num = 17.9;

console.log(parseInt(num));//retorna a conversão de float para int

console.log(parseFloat(num));

//Booleanos//
console.log(isNaN(num));

console.log(isFinite(num));

console.log(Number.isInteger(num));//diz se um número é inteiro ou não

//"Texto"//
let n = 22.8;
console.log(n.toFixed(2));//númeor de casas decimais

console.log(n.toPrecision(2));//número de dígitos

console.log(n.toString());//transforma em texto



//Biblioteca -> String
const texto = "Java .Script ";

console.log(texto.charAt(5));//seleciona um caracter

console.log(texto.concat(" é bacana"," dms"));

console.log(texto.charAt(texto.length-1));//imprime o ultimo caracter

console.log(texto.trim());//remove espaços do início e fim do texto

console.log(texto.replace(".", ","));//substitui uma vez

console.log(texto.replaceAll(" ", ""));//substitui todas as vezes

console.log(texto.includes("Java"))//usado em busca

console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

let busca = "JAVA";
console.log(texto.toLowerCase().includes(busca.toLowerCase()));//faz a busca ignorando como vc escreve caixa alta ou baixa

console.log(texto.replace("J","A").replace("S","T").replace("H","A"));

console.log(texto.indexOf("t"));//indica a posição de determinado caracter

console.log(texto.substring(0,4));//uma parte do texto, de x caracter até y caracter



//Biblioteca -> Math
console.log(Math.ceil(2.849362));//função de arredondamento pra cima

console.log(Math.floor(4.7940));//arredonda pra baixo

console.log(Math.round(4.9572));//arredonda para o mais próximo

console.log(Math.sqrt(625));//raíz quadrada

console.log(Math.abs(-7));//módulo

console.log(Math.floor(Math.random() * 100 +1));//número aleatório 