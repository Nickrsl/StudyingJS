//FOR dentro de FOR

//Desenhe um quadrado de #
let lado = 7;
let linha ="";
// for(let i = 0; i < lado; i++) {
//     let linha ="";
//     for(let j = 0; j < lado; i++) {
//         linha += "# ";
//     }
//     console.log(linha);
// }

for(let i = 0; i < lado; i++) {
    linha += "#  ";
}
for(let i = 0; i < lado; i++) {
    console.log(linha);
}

console.log("-----");



//BREAK E CONTINUE

for(let i = 1; i <= 20; i++) {
    if(!(i % 2 == 0)){
        continue; //pular o loop
    }
    console.log(i);
}

console.log("-----");

for(let i = 1; i <= 100; i++) {
    if((i % 8 == 0) && (1 != 8)) {
        console.log(i);
        break;//quebra completamente o loop
    }
}