let aluno = prompt('Digite o nome do aluno: ')
document.write('Aluno: ' + aluno + '<br>')

let nota1 =  Number(prompt('Digite a primeira nota: '))
document.write('Nota 1: ' + nota1 + '<br>')

let nota2 =  Number(prompt('Digite a segunda nota: '))
document.write('Nota 2: ' + nota2 + '<br>')

let nota3 =  Number(prompt('Digite a terceira nota: '))
document.write('Nota 3: ' + nota3 + '<br>')

let media = (nota1 + nota2 + nota3) / 3
document.write('Média: ' + media.toFixed(2) + '<br>');

if (media >= 9 || media <= 10) {
    document.write('Aprovado com nota excelente <br>')
} else if (media >= 7 || media <= 8) {
    document.write('Aprovado com uma nota boa <br>')
} else {
    let recuperacao = Number(prompt('A média foi abaixo de 7. Insira a nota de recuperação: '))

    if (recuperacao > 6) {
        document.write('Aprovado na recuperação! <br>')
    } else {
        document.write('Reprovado, estude e pratique mais. <br>')
    }
}