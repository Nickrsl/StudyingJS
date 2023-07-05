/*variaveis:
    nao pode ter espaço(troque por - ou _)
    não pode **começar com número
    único caracter especial que pode usar $ 
    
    Escopo - espaço onde aplicamos um código que funciona lá dentro
    -no JS o escopo é delimitado por {}
    -Escopo global(todo o código)

    uma variável não pode ser chamada antes de ser declarada:
    -> let retorna erro
    -> var retorna undefined
    */
    
    // Operador de Concatenação +
    const n = 2 + 3;//adição
    const texto = "O número é " + n; //concatenação
    console.log(texto);
    console.log("A soma de " + 2 + " com " + 3 + " é igual a " + (2+3));//outro exemplo de concatenação