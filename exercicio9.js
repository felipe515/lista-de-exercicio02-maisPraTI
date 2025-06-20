function paresParaObjeto(pares) {
  const obj = {};

  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }

  return obj;
}

function objetoParaPares(obj) {
  const pares = [];

  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }

  return pares;
}


const pares = [["nome", "Alice"], ["idade", 30], ["cidade", "São Paulo"]];
const objeto = paresParaObjeto(pares);
console.log(objeto);


const paresNovos = objetoParaPares(objeto);
console.log(paresNovos);


