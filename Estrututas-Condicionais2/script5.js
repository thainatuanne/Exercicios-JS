// For

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 

let numero = Number(prompt('Digite um número qualquer: '))

if (!isNaN(numero)) {
    let resultado = ''

    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i} \n`
    }

    alert(`Tabuada do número ${resultado}`)
} else {
    alert('Por Favor! Digite um número válido!')
}

// Do While

let n = parseInt(prompt('Digite um número qualquer: '));

// Verificação para garantir que o número é válido
if (!isNaN(n)) {
    let con = 1

    do {
        let r = n * con
        console.log(`${n} x ${con} = ${r}`)
        con++
    } while (con <= 10)
    
} else {
    console.log('Por Favor! Digite um número válido!')
}


// While
let num = parseInt(prompt('Digite um número qualquer: '));

let contador = 1;

while (contador <= 10) {
let resposta = num * contador;
    

 document.write(`${num} x ${contador} = ${resposta}<br>`);
    
contador++;
}

