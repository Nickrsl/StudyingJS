function divisao(num, den) {
    if (den == 0) {
        return; //retorno vazio
    }
    else {
        return (num / den);
    }
}
console.log(divisao(22, 0));
console.log("--------");




//Callback = função passada como parametro de outra função

function requisicaoParaBanco(callbackSuccess, callbackError) {
    let resultados = 0;
    for(let i = 0; i < 10000000; i++) { // requisição feita para o servidor (simulção)
        resultados += i;
        if(i === -1000) { // aqui gerou um erro
            callbackError();
        }
    }
    callbackSuccess(resultados);
}

function sucesso(res) {
    console.log("Ta ai os resultados!");
    console.log(res);
}

function erro() {
    numError++;
    console.log("Houve erro A Companhia SoulCode pede desculpas!");
}

requisicaoParaBanco(sucesso, erro);

console.log("--------");







//Função EXPRESSION 
/*
function nome (){
    comandos
    return
}
*/
function somar(n1, n2) { // Entrada
    let soma = n1 + n2; // Processamento
    return soma; // Saída
}
console.log("--------");






//TIPOS DE FUNÇÕES ANÔNIMAS = usadas qnd a função não se repete


//Função ANÔNIMA = SEM NOME, muito usada no conceito de callback
//-> usada qnd a função não se repete
/*
function () {
    comandos
    return
}
*/
setTimeout(function() { 
        console.log("Olá, Mundo com SetTimeout.");
    }, 3000);// após 3000 milisegundos ele irá executar a função anonima

console.log("--------");


setInterval(function() { 
    console.log("Olá, Mundo com SetInterval.");
}, 2000);// a cada 2000 milisegundos ele irá executar a função anonima

console.log("--------");



//ARROW Function - Função de SETA, também são funções anônimas, porém mais enchuta

function teste(callback) {
    let valor = callback(130);
    console.log(valor);
}
console.log("--------");



//modo1 -> DOIS ou mais comandos: COM {} e return.
/*
() => {
    comandos
    return
}
*/
teste((numero) => {
    return (numero * 2);
});
console.log("--------");

//podemos usar _ no lugar dos (), caso não haja parametro




//modo2 -> apenas UM comando: SEM a {}, ou seja, e sem return.
/*
    () => comandos
*/
teste(numero => numero*2);
console.log("--------");





// RECURSIVIDADE -> Chamada de uma função pela mesma função
function fatorial(numero) {
    if(numero == 1) {
        return 1;
    }
    return numero * fatorial(numero - 1);
}
console.log(fatorial(4));
console.log(fatorial(6));