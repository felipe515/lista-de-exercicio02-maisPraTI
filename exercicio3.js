const prompt = require('prompt-sync')();

function palavrasUnicas(frase) {
  const palavras = frase.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let contagem = 0;

    for (let j = 0; j < palavras.length; j++) {
      if (palavras[i] === palavras[j]) {
        contagem++;
      }
    }

    if (contagem === 1) {
      unicas.push(palavras[i]);
    }
  }

  return unicas;
}


const fraseUsuario = prompt("Digite uma frase:");
const resultado = palavrasUnicas(fraseUsuario);

console.log("Palavras únicas:", resultado);
