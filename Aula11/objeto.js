// Objeto é uma estrtura que representa o objeto do mundo real no nosso código.
// Classe -> Planta ou o Modelo do objeto
// Instância é processo de construir o objeto "new Livro()"
// Construtor é a função que gere o objeto fisico
// Caracteristicas -> Atributos/Propriedades, Métodos/Funções


//estrutura que representa objetos da vida real(ex. produto, cliente, profissão)
//objeto pode ser modelado -> classe(todas tem q começar com letra maiúscula)


//planta
class Livro {
    genero;
    titulo;
    autor;
    paginas;
    isbn;
    alugar = function() {
        console.log("Alugado!")
    };

    static isLivro(livro) { // isLivro -> é uma função estática, ou seja não será necessário instanciar o objeto para acessa-la
        let flag = livro.titulo == undefined;
        return !flag;
    }

    concat() {
        return `${this.titulo} escrito por ${this.autor}`;
    }

    constructor(gen, tit, aut, pag, isb){
        this.genero = gen;
        this.titulo = tit;
        this.autor = aut;
        this.paginas = pag;
        this.isbn = isb;//this. faz referencia
    }
}


//INSTÂNCIA -> cria um objeto

let arquiteturaLimpa = new Livro();//construção -> executa o constructor
console.log(typeof arquiteturaLimpa);


console.log("--------");

// sem constructor
arquiteturaLimpa.genero = "Artigo";
arquiteturaLimpa.titulo = "Arquitetura limpa";
arquiteturaLimpa.autor = "Robert C. Martin";
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.isbn = "978-85-508-0460-6"
arquiteturaLimpa.alugar();

console.log(arquiteturaLimpa);

console.log("--------")


// com constructor
let javaIniciantes = new Livro("Artigo Científico", "Java para Iniciantes", "João Gomes", 320, "123-45-678-9101-1");
console.log(javaIniciantes);

// aplicando o uso do "static"
let livroTeste = new Livro();
livroTeste.titulo = "Titulo Teste";
console.log(Livro.isLivro(livroTeste));

// cria um objeto sem classe
// const objeto = {};
// console.log(typeof objeto);
// console.log(objeto);