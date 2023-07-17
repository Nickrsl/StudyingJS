const vetor1 = [0, 1, 2, 3, 4];// unidimensional
const vetor2 = [0, 2, 4, 6, 8];
const vetor3 = [3, 6, 9, 12, 15];
const vetor4 = [0, 4, 8, 12, 16];

const matriz = [vetor1, vetor2, vetor3, vetor4];//bidimensional

console.log(vetor1[0]);//chamando o primeiro elemento do v1
console.log(matriz[0][0]);//como chamar o primeiro elemento do v1 através da matriz

console.log("---------");

//matriz 3d = matriz com n matrizes dentro

const matriz3d = [
    [
        [1, 2],//vetor0
        [3,4]//vetor1
    ],//matriz0
    [
        [5, 6],//[ind0, ind1]
        [7, 8]//[ind0, ind1]
    ],//matriz1
]

console.log(matriz3d[0][0][0]);//mostra o primeiro indice, do primeiro vetor, da primeira matriz

//(matriz3d[matriz][vetor][indice])

console.log("---------");

const matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz3x3[0][0]);//primeiro indice do primeiro vetor

console.log("---------");

for(let x = 0; x < matriz3x3.length; x++) {
    for(let y = 0; y < matriz3x3[x].length; y++) {
        console.log(matriz3x3[x][y]);
    }
}