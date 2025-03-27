const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O forEach é uma sintaxe reduzida para percorrer a lista.
// Mais lento que o for convencional...
lista.forEach((value, i, listRef) => {
  console.log(value + i);
});
