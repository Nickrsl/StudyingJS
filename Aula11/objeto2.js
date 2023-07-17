class Pessoa {
    nome;
    idade;
    email;
    constructor(n, age, em){
        this.nome = n;
        this.idade = age;
        this.email = em;
    }
}

let pessoa1 = new Pessoa("Nick Lopes", 18, "nick.lopes@gmail.com");
console.log(pessoa1);


console.log("----------------------------------");


//Criando objetos sem classe
const pessoa2 = {
    nome:"Nick Lopes",
    idade: 18,
    email: "nick.lopes@gmail.com",
    foto:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    enabled: true
};
console.log(pessoa2);

console.log(pessoa2[0]);
console.log(pessoa2["nome"]);
console.log(pessoa2.nome);//diferente de uma array, podemos acessar os elementos pela chave, não mais pelo indice numérico

console.log("----------------------------------");

const pc = {
    ram: 16,
    disco: 1,
    processador: "i9 intel",
    fonte: "100w",
    placaMae: "Gigabyte"
};

const saldo = 4100;

if(saldo > 4000) {
    pc.placaVideo = "RXT 3080";
}

console.log(pc);

console.log("------------------------");

let n1 = 2;
let n2 = n1;//faz uma cópia
n1 = 3;
console.log(n1);//3
console.log(n2);//2


console.log("------------------------");


let obj1 = {nome: "Alviner", curso: "Produção Multimídia"};

let obj2 = obj1;//não faz cópia, faz uma referencia do outro obj na memoria

obj1.nome = "Alviner Viscarde";

console.log(obj1);
console.log(obj2);

console.log("------------------------");

//Operador spread "..."

let objeto1 = {nome: "Alviner", curso: "Produção Multimídia"};

let objeto2 ={...objeto1};//copia os elementos do objeto1 e "espalha" no objeto2

objeto1.nome = "Alviner Viscarde";

console.log(objeto1);
console.log(objeto2);

//Operador delete

delete objeto1.nome; // remove a propriedade "nome" do objeto
console.log(objeto1);