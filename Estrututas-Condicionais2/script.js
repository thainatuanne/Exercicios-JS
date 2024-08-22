// Estuturas de repetição - laços de repetição

const numeroAleatorio = Math.floor((Math.random() * 10) + 1)

let tentativas = 0

while (true) {
    const palpite = Number(prompt('Adivinhe o número entre 1 e 10.'))
    
    tentativas++

    if(palpite === numeroAleatorio) {
        alert('Parabéns! Você acertou.')
        break
    } else {
        alert('Tente Novamente.')
    }
}

console.log(numeroAleatorio)