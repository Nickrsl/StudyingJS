// Vetores - Arrays
let nota = 9.6; // variável simples
let notas = [6.5, 7.8, 9.2]; // variável composta
let daniel = ["Daniel", 23, "E.M.", true]; //má prática

console.log(typeof nota);
console.log(typeof notas);//object
console.log(notas.length);//tamanho do vetor

console.log("-----");

let pesos =[10, 56.4, 78.3, 82.8, 34.2];
console.log(pesos.length);
console.log(pesos[2]);//indice -> numero que representa a posição do elemento 
console.log(pesos[pesos.length-1]);// ultimo elemento
console.log(pesos[0] + pesos[pesos.length-1]);// soma do primeiro e último

console.log("-----");

console.log(pesos);//imprime os valores tudo duma vez

for(let i = 0; i < pesos.length; i++){
    console.log(pesos[i]);
}//printa todos os valores um de cada vez

console.log("-----");

let operacoes = [
    (n1,n2) => n1 + n2,
    (n1,n2) => n1 - n2,
    (n1,n2) => n1 * n2,
    (n1,n2) => n1 / n2
];

console.log(operacoes[0](3,4));//entre [] a operação, entre () os valores

console.log("-----");

console.log(pesos);
pesos[2] = 94.4;//altera o valor
console.log(pesos);

for(let i = 0; i < pesos.length; i++){
    pesos[i] *= 2;
}//multiplica todos os valores
console.log(pesos);

console.log("-----");

let acumulador = 0;
    for(let i = 0; i < pesos.length; i++){
        acumulador += pesos[i];
}
console.log(acumulador*2);//multiplica a soma de todos os valores por 2

console.log("-----");

//FOR EACH - for para vetores (usar este pois é mais clean!)
for(let peso of pesos){
    console.log(peso);
}// -> mostra os valores

console.log("-----");

for(let indice in pesos){
    console.log(indice);
    console.log(pesos[indice]);
}// -> mostra os indices e os valores
