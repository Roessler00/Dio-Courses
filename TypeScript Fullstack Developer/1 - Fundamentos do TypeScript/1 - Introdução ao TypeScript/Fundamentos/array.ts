const array: Array<number> = [1, 2, 3, 4]; // Array<number> = Tipo Diamante

const stringArray: string[] = ["a", "b", "c"]; // string[] = Sintaxe Simples

console.log(array[1], stringArray[0]);

// .length
console.log("Quantidade de elementos no array:", stringArray.length);

// .push = adiciona um elemento no final
console.log("Array Original", array);

array.push(5);

console.log("Array com novo elemento", array);

// .pop = remove o último elemento
console.log("Array Original", array);

array.pop();

console.log("Array retirando o ultimo elemento", array);
