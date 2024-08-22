//Outra forma de fazer o ex script1
const numeroAleatorio = Math.floor(Math.random() * 10) + 1
let tentativas = 0
let acertou = false

while (!acertou) {
    const palpite = parseInt(prompt('Adivinhe um número entre 1 a 10.'))

    tentativas++

    if (palpite === numeroAleatorio) {
        alert(`Parabéns! Você acertou em ${tentativas} tentativas.`)
        acertou = true
    } else {
        alert(`Tente Novamente.`)
    }
}