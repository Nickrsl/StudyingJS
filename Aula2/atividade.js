//verifique se um número é par ou ímpar
let n1;
n1 = 5;
n1 %= 2;
n1=0 ? "par" : "impar";
console.log(n1);

//média aritmética de três números
let nota1 = 5;
let nota2 = 4;
let nota3 = 6;
let media = (nota1 + nota2 + nota3) / 3;
console.log("media =");
console.log(media);

//determine se um número é divisível por 3 e por 5 ao mesmo tempo
let num = 14;
let condicao = (num % 3 == 0 ) && (num % 5 == 0 );
let mensagem = condicao ? "É divisivel por 3 e 5" : "Não é divisivel por 3 e 5"
console.log(mensagem);

//área de um triângulo com base e altura
let base = 4;
let altura = 20;
let area = (base + altura) / 2;
console.log("area do triangulo =");
console.log(area);

//converta uma temperatura de graus Celsius para Fahrenheit
let celsius = 30;
let fahrenheit = (1.8 * celsius) + 32;
console.log("fahrenheit =");console.log(fahrenheit);

//calcule o delta das funções de segundo grau
let a = 2;
let b = 5;
let c = 1;
let delta = (b ** 2) - (4 * a * c);
console.log("delta =");
console.log(delta);

//se uma determinada pessoa pode dirigir, baseado na sua idade
let idade = 18;
let dirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(dirigir);