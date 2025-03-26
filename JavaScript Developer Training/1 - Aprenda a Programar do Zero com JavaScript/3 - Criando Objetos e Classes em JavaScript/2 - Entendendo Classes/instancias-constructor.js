class Pessoa {
  nome;
  idade;
  anoNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoNascimento = 2025 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const joao = new Pessoa("João Roessler", 25);
const allan = new Pessoa("Allan Leonel", 25);

console.log(joao);
