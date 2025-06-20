function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() 
    .sort((a, b) => a.preco - b.preco) 
    .map(produto => produto.nome); 
}


const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 900 },
  { nome: "Cabo HDMI", preco: 30 }
];

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados); 
