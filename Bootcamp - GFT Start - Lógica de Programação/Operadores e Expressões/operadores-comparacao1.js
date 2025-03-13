let numero = "1";

console.log(numero == 1);
console.log(numero === 1);

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo (string, number...)

let marca = "Apple";
console.log(marca === "Apple");
console.log(marca !== "Apple");
console.log(marca !== "Samsung");

// !== é diferente ?

let resultado = marca !== "Samsung";
console.log(resultado);

let cpfBloqueado = "123.445.222-45";
let cpfUsuario = "222.111.222-09";
let ehCpfBloqueado = cpfUsuario === cpfBloqueado;

console.log("O usuário está barrado ? " + ehCpfBloqueado);

let cpfPermitido = "222.555.333-01";
let cpfDoUsuario = "222.555.333-02";
let ehBloqueado = cpfDoUsuario !== cpfPermitido;

console.log("É um usuário invalido ? " + ehBloqueado);
