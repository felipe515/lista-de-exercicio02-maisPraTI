function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const chave = JSON.stringify(args); 

    if (cache.has(chave)) {
  
      return cache.get(chave);
    }

    const resultado = fn.apply(this, args); 
    cache.set(chave, resultado); 
    return resultado;
  };
}


function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5));
console.log(fatorialMemo(5)); 
console.log(fatorialMemo(6));