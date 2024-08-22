// Media Ponderada

let nota1 = 10;
let nota2 = 7;
let nota3 = 8;
let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

// verifica se o aluno passou

if (mediaPonderada >=7) {
    console.log('O aluno passou com média:' + mediaPonderada)
} else {
    console.log('O aluno reprovou com média:' + mediaPonderada)
}

// Idade de anos em dias

let anoNascimento = 1996;
let mesNascimento = 11;
let diaNascimento = 10;

let anoHoje = 2024;
let mesHoje = 8;
let diaHoje = 14;


let diferencaAno = anoHoje - anoNascimento;
let diferencaMes = mesHoje - mesNascimento;
let diferencaDia = diaHoje - diaNascimento;


let idadeEmDias = (diferencaAno * 365) + (diferencaMes * 30) + diferencaDia;

console.log('Você tem aproximadamente ' + idadeEmDias + ' dias de vida.');



// Atividade 1: Cálculo Simples

// Escreva um programa em JavaScript que realize operações matemáticas básicas.
// Declare duas variáveis, num1 e num2, e atribua valores a elas (por exemplo, 5 e 3).
// Calcule a soma, subtração, multiplicação e divisão desses números.
// Mostre os resultados no console.

let num1 = 25;
let num2 = 36;

let soma = num1 + num2
console.log('Total '+ soma)

let subtracao = num1 - num2
console.log('Total '+ subtracao)

let multiplicacao = num1 * num2
console.log('Total '+ multiplicacao)

let divisao = num1 / num2
console.log('Total '+ divisao)

