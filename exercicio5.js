const prompt = require('prompt-sync')();

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); 
    timerId = setTimeout(() => {
      fn.apply(this, args); 
    }, delay);
  };
}


function processarEntrada(texto) {
  console.log("Processado:", texto);
}

const processarComDebounce = debounce(processarEntrada, 2000);


  const entrada = prompt("Digite algo (aguarde 2s após digitar para ver o resultado):");
  processarComDebounce(entrada);


