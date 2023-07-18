const alunos = [
    { nome: "Nicoli", idade: 18, nota: 9.8},
    {nome: "Alviner", idade: 17, nota: 9},
    { nome: "Hope", idade: 30, nota: 8}, 
    { nome: "Tony", idade: 43, nota: 7.8}, 
    { nome: "Bella", idade: 54, nota: 9.5}
];


function inicializar(){
    const body = document.querySelector("#tabelabody");
    for (aluno of alunos){
        body.innerHTML += `
        <tr> 
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.nota}</td>
        </tr>
        `;
    }
}

inicializar();