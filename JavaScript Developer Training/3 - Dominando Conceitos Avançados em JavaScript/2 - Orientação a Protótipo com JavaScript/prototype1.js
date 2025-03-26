const pessoa = {
  genero: "masculino",
};

const joao = {
  nome: "João",
  idade: 24,
  __proto__: pessoa,
};

console.log(joao.genero);
