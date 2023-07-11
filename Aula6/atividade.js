/*
NÚMEROS
Escreva um programa que  gere um número aleatório entre 10 e 20.
Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
Escreva um programa que  calcule o valor absoluto de um número.
Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.
Arredonde um número para um número específico de casas decimais.
Escreva um programa que  arredonde um número para o inteiro mais próximo.
Verifique se um número é um valor finito, infinito, NaN ou não.
*/

let num = Math.floor(Math.random()* (20 - 10 + 1) + 10);


console.log("A raiz quadrada de " + num + " é igual a " + Math.sqrt(num));

console.log("O valor absoluto de " + Math.sqrt(num) + " é igual a " + Math.abs(Math.sqrt(num)));

console.log("O número inteiro anterior de " + Math.sqrt(num) + " é " + Math.floor(Number.parseInt(Math.sqrt(num))));

console.log("O número " + Math.sqrt(num) + " é aproximadamente " + Math.sqrt(num).toFixed(1));

console.log("O valor aredondado mais próximo de " + Math.sqrt(num) + " é igual a " + Math.round(Math.sqrt(num)));



if (isNaN(Math.sqrt(num).toFixed(1))) {
    console.log(Math.sqrt(num).toFixed(1) + " não é um número");
}
else {
    if (isFinite(Math.sqrt(num).toFixed(1))) {
        console.log(Math.sqrt(num).toFixed(1) + " é um número finito");
    }
    else {
        console.log(Math.sqrt(num).toFixed(1) + " é um número infinito");
    }
}


/*
CARACTERES
Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
Escreva um programa que verifique se a string "ba" contém em outras outra string.
Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
Extraia uma parte específica de uma string com base em índices.
Substitua todas as ocorrências de uma substring por outra em uma string.
Remova espaços em branco extras no início e no final e no final de uma string.
Inverta uma string. Utilize o laço for.
*/
let txt = " Alviner Viscarde é o amor da minha vida! ";
let contadorA = 0;
for (let i=0; i < txt.length; i++) {
    if(txt.charAt(i) == "A" || txt.charAt(i) == "a") {
        contadorA++;
    }
}
console.log(txt + " tem " + contadorA + " 'A's");

if (txt.includes("am")){

}

if(txt.includes("vi")) {
    console.log("Contém 'ba'");
}
else {
    console.log("Não contém 'ba'");
}

console.log(txt);
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

console.log("De 0 a 18 tem-se '" + txt.substring(0, 18) + "'");

console.log(txt.replaceAll("Alviner Viscarde", "Alvi sz"));

console.log(txt.trim());

let txtInvertido = "";
for(let i = txt.length-1; i >= 0; i--) {
    txtInvertido += txt.charAt(i);
}
console.log(txtInvertido);