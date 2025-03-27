const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Reduce - Percorre a lista e reduz a apenas um valor.
const somaDeTodosOsNumero = lista.reduce((previous, current) => {
  return previous + current;
});

console.log(somaDeTodosOsNumero);
