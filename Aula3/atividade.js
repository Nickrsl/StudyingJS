//Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
let num = 0;
if (num > 0) {
    console.log(num + " é um número positivo");
}
else if (num < 0) {
    console.log(num + " é um número negativo");
}
else {
    console.log(num + " é o número zero");
}

//Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 18;
if (idade >= 18) {
    console.log("Você já é maior de idade");
}
else if (idade < 0 || idade > 120) {
    console.log("Valor de idade inválido");
}
else {
    console.log("Você aina não é maior de idade");
}

//Escreva um programa que receba três números e determine qual deles é o maior.
let n1 = 1, n2 = 1, n3 = 2;
if (n1>n2 && n1>n3) {
    console.log(n1 + " é maior que os demais números");
}
else if (n2>n1 && n2>n3) {
    console.log(n2 + " é maior que os demais números");
}
else if (n3>n1 && n3>n2){
    console.log(n3 + " é maior que os demais números");
}
else {
    console.log("O maior número está duplicado");
}

//Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
let num1 = 7, num2 = 3;
let produto = num1 * num2
if (produto % 2 == 0) {
    console.log(produto + " é o produto par de " + num1 + " e " + num2);
}
else {
    console.log(produto + " é o produto ímp de " + num1 + " e " + num2);
}

//Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia = "Segunda";
if ( dia == "Segunda" || "Terça" || "Quarta" || "Quinta" || "Sexta") {
    console.log(dia + " é dia útil");
}
else if (dia == "Sábado" || "Domingo") {
    console.log( dia + " é fim de semana")
}
else {
    console.log( dia + " não é um dia da semana");
}

//Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let diaN = 7;
switch (diaN) {
    case 1: console.log("o " + diaN + "° dia da semana é Domingo");
        break;
    case 2: console.log("o " + diaN + "° dia da semana é Segunda");
        break;
    case 3: console.log("o " + diaN + "° dia da semana é Terça");
        break;
    case 4: console.log("o " + diaN + "° dia da semana é Quarta");
        break;
    case 5: console.log("o " + diaN + "° dia da semana é Quinta");
        break;
    case 6: console.log("o " + diaN + "° dia da semana é Sexta");
        break;
    case 7: console.log("o " + diaN + "° dia da semana é Sábado");
        break;
    default: console.log("Esse número não corresponde a nenhum dia da semana")
}