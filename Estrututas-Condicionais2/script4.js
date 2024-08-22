//Do While 

let numero = Number(prompt('Digite um número inteiro e positivo: '))
let contador = 1
let resultado = ''

do {
    resultado += contador + ' '
    contador++
} while (contador <= numero)

alert(`Acabou de contar: ${resultado}! Fim.`)

// While 

let numero2 = parseInt(prompt('Digite um número inteiro e positivo: '))
let contador2 = 1
let resultado2 = ''

while (contador2 <= numero2) {
    resultado2 += contador2 + ' '
    contador2++
}

alert(`Acabou de contar o contador 2: ${resultado2}! Fim.`)

// Verificar se o dado entrado é um number


let num
let result = ''
let cont = 1

do {
    num = parseInt(prompt('Digite um número inteiro e positivo: '))
} while (isNaN(num) || num <= 0)

do {
    result += cont + ' '
    cont++
} while (cont <= num)

alert(`${result}Acabou!`)