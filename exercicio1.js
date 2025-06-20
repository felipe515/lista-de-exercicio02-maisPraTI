// Importa o prompt-sync
const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
  
  if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
    return false;
  }

  if (mes < 1 || mes > 12) {
    return false;
  }


  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

  
  if (bissexto && mes === 2) {
    return dia >= 1 && dia <= 29;
  }

  
  return dia >= 1 && dia <= diasPorMes[mes - 1];
}


let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mes: "));
let ano = Number(prompt("Digite o ano: "));

console.log(ehDataValida(dia, mes, ano)); 

