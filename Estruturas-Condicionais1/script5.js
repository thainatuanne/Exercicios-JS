let diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
    case 1:
        nomeDoDia = 'Domingo';
        break;

    case 2:
        nomeDoDia = 'Segunda';
        break;

    case 3: 
        nomeDoDia = 'Terça';
        break;

    case 4:
        nomeDoDia = 'Quarta';
        break;

    case 5:
        nomeDoDia = 'Quinta';
        break;

    case 6:
        nomeDoDia = 'Sexta';
        break;

    case 7:
        nomeDoDia = 'Sábado';
        break;
    
    default:
        nomeDoDia = 'Dia inválido';
}

console.log(nomeDoDia);


let numeroDoMes = Number(prompt('Digite o número do mês:'));
let nomeDoMes;

switch (numeroDoMes) {
        case 1:
            nomeDoMes = 'Janeiro';
            break;
       case 2:
            nomeDoMes = 'Fevereiro';
            break;
        case 3:
            nomeDoMes = 'Março';
            break;
        case 4:
            nomeDoMes = 'Abril';
            break;
        case 5:
            nomeDoMes = 'Maio';
            break;
        case 6:
            nomeDoMes = 'Junho';
            break;
        case 7:
            nomeDoMes = 'Julho';
            break;
        case 8:
            nomeDoMes = 'Agosto';
            break;
        case 9:
            nomeDoMes = 'Setembro';
            break;
        case 10:
            nomeDoMes = 'Outubro';
            break;
        case 11:
            nomeDoMes = 'Novembro';
            break;
        case 12:
            nomeDoMes = 'Dezembro';
            break;
        default:
            nomeDoMes = 'Mês inválido, digite um valor de 1 a 12';
}

document.write(`${nomeDoMes}`);