const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];
console.log(nums);

console.log("----------------");



//modificam o array

nums.push(4);//adiciona um elemento ao final do vetor
console.log(nums);

console.log("----------------");

nums.unshift(9);//adiciona um elemento no início do vetor
console.log(nums);

console.log("----------------");

nums.pop();//remove um elemento do final do vetor
console.log(nums);

console.log("----------------");

nums.shift();// remove um elemento do início do vetor
console.log(nums);

console.log("----------------");
//sort não é mt aplicado

nums.push(100, 110, 101, 1000)
console.log(nums.sort()); //ordena o vetor na ordem alfabética, não funciona muito bem com números

const nomes = ["Nick", "Alvi", "Mayse", "Arnaldo", "Tony", "Hope"];
console.log(nomes.sort());

console.log("----------------");

console.log(nums.reverse());//reverte a ordem

console.log("----------------");

console.log(nums.splice(6,3));//remove uma sequencia de números
console.log(nums);

console.log("----------------");

console.log(nums.fill(9, 12/*, 14 */))//substitui ( valor a ser substituto, a partir do indice indicado)

console.log("----------------");




//Criação de um novo array, string

let juntar = nums.join("-"/*ou ", " */);//fazer a junção dos elementos do vetor
console.log(juntar);

console.log("----------------");

let vetor2 = [5, 6, 7];
let vetor3 = nums.concat(vetor2);//gera um novo vetor concatenado
console.log(vetor3);

console.log("----------------");

console.log(nums.includes(7));//diz de um determinado caracter está no vetor e retorna um boolean

console.log("----------------");

console.log(nums.indexOf(3));//retorna o indice do primeiro elemento do vetor

console.log("----------------");

console.log(nums.slice(3,6/*-1*/));// recortar um vetor

console.log("----------------");

nums.forEach(num => console.log(num));//iterar sobre os elementos do vetor

console.log("----------------");

// não usamos com tanta frequencia
console.log(nums.reduce((acumulador, num) => (acumulador - num), 0/*valor inicial*/));//O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

console.log("----------------");

console.log(nums.map(num => num*2));//multiplica todos os valores por 2 e gera um novo vetor

console.log("----------------");

console.log(nums.find(num => (num > 6)));//retorna o primeiro valor que corresponde a condição

console.log("----------------");

console.log(nums.filter(num => (num > 6)));//retorna um vetor com todos os elementos que corresponde a condição

console.log("----------------");

const names = [
    "João Silva",
    "Maria Santos",
    "Pedro Almeida",
    "Ana Oliveira",
    "Carlos Sousa",
    "Mariana Costa",
    "José Pereira",
    "Camila Gomes",
    "Antônio Rodrigues",
    "Luiza Sousa",
    "Fernando Lima",
    "Amanda Barbosa",
    "Rafael Carvalho",
    "Isabela Castro",
    "Francisco Pereira",
    "Laura Rocha",
    "Ricardo Cardoso",
    "Letícia Ribeiro",
    "Daniel Santos",
    "Lúcia Oliveira",
    "Rodrigo Alves",
    "Patrícia Costa",
    "Gustavo Ferreira",
    "Sofia Sousa",
    "Marcelo Silva",
    "Beatriz Rocha",
    "André Castro",
    "Carolina Souza",
    "Gabriel Braga",
    "Natália Sousa"
];

console.log(names.find(nome => nome.includes("Rocha"))); // Laura Rocha

console.log("----------------");

console.log(names.filter(nome => nome.includes("Sousa"))); // todos com Sousa

console.log("----------------");

console.log(names.filter(nome => !nome.includes("Letícia"))); // todos menos Leticia

console.log("----------------");

// String como Vetor
let nome = 'Prof. Gabriel Braga';
let idade = 21;
let mensagem = `Nome: ${nome}\nIdade: ${idade}`; // interpolação
console.log(mensagem);

console.log("----------------");

console.log(nome[2]); // perfeitamente válido -> retorna "o"

console.log("----------------");

console.log("O pessoa com nome \"Vitor\" está esperando você na recepção.");