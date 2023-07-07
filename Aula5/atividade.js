//Escreva um programa que imprima os números de 1 a 20 usando um loop for.
for(let i =1; i <= 20; i++) {
    console.log(i);
}
console.log("-----");


//Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
let p = 0;//penultimo
let u = 1;//ultimo
let i = 0;//contador
while(i <10){
    let soma = p + u;
    console.log(p);
    p = u;
    u = soma;
    i++;
}
console.log("-----");


//Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
let num = 15;
let _soma = 0;
for(let i = 1; i <= num; i++) {
    if(i % 2 != 0) {
        _soma += i;
    }
}
console.log("Soma dos números ímpares até " + num + " é " + _soma);
console.log("-----");


//Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.
let n = 6;
for(let i = 0; i < 11; i++){
    console.log(n + " + " +  i + " = " + (n + i));
}
console.log("-----");


//Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
let numero = 7;
for(let i = 1; i <= 100; i++) {
    if(i % numero == 0) {
        console.log(i);
    }
}
console.log("-----");


//Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".
let altura = 9;
let linha = "";
for (let i = 0; i < altura; i++){
    for(let j = 1; j < (altura - (altura - 2)); j++){
        linha += "* ";
    }
    console.log(linha);
}
/*
ou
let linha ="";
let altura = 6;
for(let i = 0; i < altura; i++) {
    linha += "* ";
    console.log(linha);
}
*/
console.log("-------------");



//DESAFIO
//Desenhe um quadrado com @, mas seu interior deve ser oco
let lado = 5;
let linha1 = "";
for(let y = 1; y <= lado; y++) {
    linha1 = "";
    for(let x = 1; x <= lado; x++) {
        if(y == 1 || y == lado || x == 1 || x == lado) {
            linha1 += "@ ";
        }
        else {
            linha1 += "  ";
        }
    }
    console.log(linha1);
}
