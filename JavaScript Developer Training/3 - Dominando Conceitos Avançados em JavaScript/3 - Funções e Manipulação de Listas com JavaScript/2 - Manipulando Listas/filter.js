const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter - filtra os dados da lista, o que for 'true' fica, o que não for vaza.
const listaDeNumerosPares = lista.filter((element) => {
  return element % 2 === 0;
});

console.log(listaDeNumerosPares);
