//Estruturas de repetição

/*Podem existir variaveis iguais caso elas estejam em escopos distintos*/

/*
FOR:
-> anatomia:
for(atribuição; condição; reatribuição) {
    codigo de repetição
}*/


let n;//ou for (let n = 0)

//contagem de 1 em 1
for(n = 0; n < 10; n++) {
    console.log(n);
}

console.log("------");

//contagem de 2 em 2
for(n = 0; n < 10; n += 2) {
    console.log(n);
}

console.log("------");

//contagem regressiva
for(n = 10; n >=0; n--) {
    console.log(n);
}



/*
WHILE
->anatomia:
let nome = atribuição;
while(condição) {
    nome++ [caso queira atribuir antes]
    console.log(nome)
    nome++ [caso queria incrementar dps]
}
*/

/*
Diferenças:
for -> quantidade determinada de repetições
while -> quantidade indeterminada de repetições
*/

let num = 0;
    while(num < 17){
        console.log("Porto+Code");
        num++
    }




//Exemplificação da mistura de dois conceitos: if e for
let numero = 80;
    let primo = false;
    for (let i = 2; i < numerp; i++) {
        if(numero % i == 0) {
            primo = false;
        }
    }
if (primo) {
    console.log("É primo");
}
else {
    console.log("Não é primo");
}