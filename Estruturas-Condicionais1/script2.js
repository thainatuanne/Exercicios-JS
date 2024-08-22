const num1 = 25
const num2 = 37

const operador = '+'

let resultado

if (operador === '+') {
    resultado = num1 + num2
} else if (operador === '-') {
    resultado = num1 - num2
} else if (operador === '*') {
    resultado = num1 * num2
} else if (operador === '/') {
    resultado = num1 / num2
} else {
    console.log('Operador Inválido!')
}

console.log(`Resultado: ${resultado}`)

let nome = prompt('Digite o seu nome: ')
console.log(nome)

let idade = prompt('Digite sua idade: ') // não adiciona a soma, coloca atrás do numero
console.log(idade + 2) 

let idade2 = parseInt(prompt('Digite sua idade: '))
console.log(idade2 + 2)

let idade3 = Number(prompt('Digite sua idade: '))
console.log(idade3 + 2)

let idade4 = parseFloat(prompt('Digite sua idade: '))
console.log(idade4 + 2)

