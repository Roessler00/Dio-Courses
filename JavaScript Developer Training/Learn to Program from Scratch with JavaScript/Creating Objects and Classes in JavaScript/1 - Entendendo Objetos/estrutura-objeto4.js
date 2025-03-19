const joao = {
  nome: "João Roessler",
  idade: 24,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

console.log(joao[`nome`]);
