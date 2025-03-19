const joao = {
  nome: "João Roessler",
  idade: 24,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

//Implementando valor por fora do objeto...
joao.altura = 1.8;

joao.descrever();
