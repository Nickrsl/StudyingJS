/*Condição -> Cálculo Lógico 
    if - se
    else - caso não
    (ás vezes else não é necessário)
    */


//apenas duas oções - IF, ELSE
const altura = 1.50;
if(altura >= 1.60)//não pode colocar ; depois do if
    console.log("Pode entar no brinquedo!");
else
    console.log("Não pode entrar no brinquedo!");


//diversas opções - IF, ELSE IF, ELSE
let nivelIngles =0;
if( nivelIngles == 1)
    console.log("Nível Iniciante");
else if(nivelIngles == 2)
    console.log("Nível Básico");
else if(nivelIngles == 3)
    console.log("Nível Intermediário");
else if(nivelIngles == 4)
    console.log("Nível Avançado");
else if(nivelIngles == 5)
    console.log("Nível Fluente");
else
    console.log("Nível de Inglês Desconhecido");


//Exemplo de apenas IF (imprime mais de uma mensagem, ja que não tem o else)
let saldo = 350;
if(saldo > 100)
    console.log("Comprar um livro");
if(saldo > 200)
    console.log("Comprar um tênis");
if(saldo > 300)
    console.log("Comprar um salto alto");



/*IF dentro de IF - 
    escopo{
    dncj; 
    hdiuh; 
    dnchj;
}
*/
let comprou = false;//flag
let _saldo = 250;
if(_saldo > 200) {
    console.log("Fez a compra do tenis");
    comprou = true;
}
else {
    console.log("Sem grana suficiente");
    comprou = false;
}
if(comprou) { //esse outro if (booleano) não precisa atribiur valor, já que o if só será executado caso seja true
    console.log("Consegiu fazer a compra!");
}


//ANINHAMENTO de if - passou de 3 variáveis já não é mais uma boa prática

let num1 = 100, num2 = 100, num3 = 100;
if(num1 == num2 || num1 == num3 || num2 == num3) {
    console.log("Os números são iguais");
}
else if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(num1 + " > " + num2 + " > " + num3);
    }
    else {
        console.log(num1 + " > " + num3 + " > " + num2);
    }
}
else if(num2 > num1 && num2 > num3) {
    if(num1 > num3) {
        console.log(num2 + " > " + num1 + " > " + num3);
    }
    else {
        console.log(num2 + " > " + num3 + " > " + num1);
    }
}
else{
    if(num1>num2) {
        console.log(num3 + " > " + num1 + " > " + num2);    
    }
    else{
        console.log(num3 + " > " + num2 + " > " + num1);
    }
}


/*
SWITCH CASE (Valores em comum - x=1, y=2 etc)
*Não esqueça do break;
* else = default
*/

//Ao invés disso:
let mes = 5;
if(mes ==1) {
    console.log("Janeiro");
}
else if(mes ==2) {
    console.log("Fevereiro");
}
else if(mes ==3) {
    console.log("Março");
}
else if(mes ==4) {
    console.log("Abril");
}
else if(mes ==5) {
    console.log("Maio");
}
else if(mes ==6) {
    console.log("Junho");
}
else if(mes ==7) {
    console.log("Julho");
}
else if(mes ==8) {
    console.log("Agosto");
}
else if(mes ==9) {
    console.log("Setembro");
}
else if(mes ==10) {
    console.log("Outrubro");
}
else if(mes ==11) {
    console.log("Novembro");
}
else if(mes ==12) {
    console.log("Dezembro");
}
else {
    console.log("Esse mês não existe")
}


//Faça isso:
switch(mes) {
    case 1: console.log("Janeiro");
        break;
    case 2: console.log("Fevereiro");
        break;
    case 3: console.log("Março");
        break;
    case 4: console.log("Abril");
        break;
    case 5: console.log("Maio");
        break;
    case 6: console.log("Junho");
        break;
    case 7: console.log("Julho");
        break;
    case 8: console.log("Agosto");
        break;
    case 9: console.log("Setembro");
        break;
    case 10: console.log("Outubro");
        break;
    case 11: console.log("Novembro");
        break;
    case 12: console.log("Dezembro");
        break;
    default:
        console.log("Esse mês não existe");
}