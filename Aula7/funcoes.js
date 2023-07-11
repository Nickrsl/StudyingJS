/*
VANTAGENS de usar funções:
reutiliza o mesmo codigo e facilita a leitura, ja que cria uma rotina.
*caso haja um bug, vc só precisa corrigir uma vez
*/
//TIPOS de funções:

/*
*recebem parametros -> "valores" dentro dos ();//
n1=10
n1-parametro; 10-argumento
*/

function somar(n1, n2) {
    console.log("Primeiro número é " + n1);
    console.log("Segundo número é " + n2);
    console.log("A soma entre " + n1 + " e "+ n2 + " é igual a " + (n1+n2));
}
somar(10, 20);

console.log("-------");


//*retornam valores;
//return -> funciona como o break

function multiplicacao(n1, n2) {
    let multiplicar = (n1 * n2);
    return multiplicar;
}
console.log(multiplicacao(20,3));

console.log("-------");

function calc(n1, n2, op = "+") {
    switch(op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
    return NaN;
}
console.log(calc(80, 6)); // 86
console.log(calc(56, -12, "-")); // 65
console.log(calc(-56, 0, "*")); // 0
console.log(calc(18, 2, "somar")); // NaN

console.log("-------");


/*
*não recebem parametros;
*não retornam valores;
*/
//Caso vc declare n1=10, por exemplo, isso será um padrão que se vc n chamar um número especifico, será usado. Mas caso vc chame um número especifico, o padrão será ignorado.


function triangulo(altura) {
    for(let i = 1; i <= altura; i++){
        let linha = "";
        for(let j = 1; j <= altura-i; j++) {
            linha += " ";
        }
        for(let j = 0; j < i; j++) {
            linha += "* ";
        }
        console.log(linha);
    }
}

triangulo(10);