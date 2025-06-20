function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    if (acumulador[cliente]) {
      acumulador[cliente] += total;
    } else {
      acumulador[cliente] = total;
    }

    return acumulador;
  }, {});
}


const vendas = [
  { cliente: "Alice", total: 100 },
  { cliente: "Bob", total: 200 },
  { cliente: "Alice", total: 150 },
  { cliente: "Carlos", total: 50 },
  { cliente: "Bob", total: 75 }
];

const resultado = agruparPorCliente(vendas);
console.log(resultado);


