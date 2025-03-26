const pessoa = {
  genero: "masculino",
};

const joao = Object.create(pessoa);

joao.nome = "João";
console.log(joao.genero);
