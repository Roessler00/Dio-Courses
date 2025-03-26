const pessoa = {
  idade: 18,
};

const joao = {
  nome: "João",
  idade: 24,
  __proto__: pessoa,
};

const renan = {
  nome: "Renan",
  __proto__: pessoa,
};

console.log(joao.idade);
console.log(renan.idade);
