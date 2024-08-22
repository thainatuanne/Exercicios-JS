// consegue reatribuir

let nome = 'Thainá'  // inicialização

nome = 'Carla'  // reatribuir

console.log(nome)

//não tem como reatribuir

const idade = 25 // inicialização

//idade = 36 // reatribuir

console.log(idade)

//

let cidade

console.log(cidade)

//const pi // precisa inicializar com um dado, se não dá erro

//console.log(pi)

// não usar var, usar let

// var hoje pode ser redeclarado, o que não é aconselhado, porque você recria uma variavel onde o programa não avisa que você ja tem
// também consegue reatribuir
// optar por let ou const

//var saudacao = 'Hello'

//saudacao = 'Hello, Carla!'

//console.log(saudacao)

//var pontuacao = 100
//console.log(pontuacao)

//var pontuacao = 50 // aqui foi declarado de novo a variavel com o mesmo nome, e o programa aceita por ser var
//console.log(pontuacao)

// Forma errada 

//let varA = 'A'

//let varA = 'B'

//let varC = 'C'

//varA = varB
//varB = varC
//varC = varA

//console.log(varA, varB, varC)

// FORMA CERTA
const temp = numA
numA = numB
numb = numC
numC = temp

console.log(numA, numB, numC)

// OUTRA FORMA

let numero1 = 10
let numero2 = 20

const temp2 = numero1
numero2 = numero1
numero1 = temp2
console.log(numero1, numero2)

const idade2 = 16

if(idade2 > 13) {
    console.log('Criança')
} else if (idade < 18) {
    console.log('Adolescente')
} else {
    console.log('Adulto')
}