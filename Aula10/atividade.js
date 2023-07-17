const numeros = [1, 2, 6, 9, 3, 0, 7, 8, 4, 5];

// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
// COM FOR EACH
function somaTodosForEach(numeros) {
    let acumulador = 0;
    for(let n of numeros) {
        acumulador += n
    }
    return acumulador;
}
console.log("A soma dos numeros do vetor é " + somaTodosForEach(numeros));
console.log("A soma dos numeros do vetor é " + numeros.reduce((a, n) => a+n, 0));


// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
const linguagens = ["HTML", "CSS", "JS", "JAVA", "SQL"];
function juncao(textos) {
    let concatenacao = "";
    for(let texto of textos) {
        concatenacao += texto + ", ";
    }
    return concatenacao;
}
console.log(juncao(linguagens));
console.log(linguagens.join(", "));


// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
function maiorDoVetor(numeros) {
    let maior = numeros[0];
    for(let n of numeros) {
        if(n > maior) {
            maior = n;
        }
    }
    return maior;
}
console.log("O maior numero do vetor é " + maiorDoVetor(numeros));


// Crie uma função que receba um vetor de números e retorne a média dos elementos.
function mediaDoVetor(numeros) {
    let total = 0;
    let tamanho = numeros.length;
    for(let n of numeros) {
        total += n;
    }
    return total/tamanho; // media
}
console.log("A média dos numeros do vetor é " + mediaDoVetor(numeros));

// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
console.log(numeros.map(n => n**2));


// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.
const palavras = ["Gato", "Anel", "Banana", "Computador", "Sol", "Casa", "Carro", "Arvore", "Livro", "Chocolate"];
console.log(palavras.filter(p => (p[0] == "A")));


// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.
numeros.forEach(n => console.log(`${n} x 3 = ${n*3}`));


// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.
console.log(numeros.includes(10));