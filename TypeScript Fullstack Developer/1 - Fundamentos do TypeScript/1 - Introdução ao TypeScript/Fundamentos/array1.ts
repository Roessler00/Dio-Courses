const array1: Array<number> = [1, 2, 4, 3]; // Array<number> = Tipo Diamante

// .find() = retorna o primeiro valor que atenda ao pedido de busca no array, levando em conta sua ordem
const buscaNum = array1.find((num) => num > 2);

console.log(buscaNum);
console.log("-----------------------------------------");

// .forEach() = percorre cada elemento do array e executa uma função para cada um deles.
array1.forEach((num) => {
  if (num > 2 && num % 2 === 0) {
    console.log(num * 2);
  }
});
console.log("-----------------------------------------");

// .map() = cria um novo array aplicando uma função a cada elemento do array original.
// Pode usar com async function e tem mais performance
array1.map((num) => console.log(num));
console.log("-----------------------------------------");

// Diferença entre .forEach() e .map()
console.log("Diferença entre .forEach() e .map()");
console.log("-----------------------------------------");

// .forEach()
console.log(".forEach()");
array1.forEach((num) => {
  console.log(num * 2);
});

// .map()
console.log(".map()");
const dobrados = array1.map((num) => num * 2);

console.log(dobrados);
