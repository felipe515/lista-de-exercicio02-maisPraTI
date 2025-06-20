// Importa o prompt-sync
const prompt = require('prompt-sync')();


const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativa;
let tentativas = 0;

while (true) {
  tentativa = Number(prompt("Adivinhe o número (entre 1 e 100):"));

  
  if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
    console.log("Por favor, digite um número válido entre 1 e 100.");
    continue;
  }

  tentativas++;

  if (tentativa === numeroSecreto) {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    break;
  } else if (tentativa < numeroSecreto) {
    console.log("Mais alto!");
  } else {
    console.log("Mais baixo!");
  }
}
