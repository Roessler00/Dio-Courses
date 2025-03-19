class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const joao = new Pessoa();
joao.nome = "João Roessler";
joao.idade = 24;

const allan = new Pessoa();
allan.nome = "Allan Leonel";
allan.idade = 25;

joao.descrever();
allan.descrever();
