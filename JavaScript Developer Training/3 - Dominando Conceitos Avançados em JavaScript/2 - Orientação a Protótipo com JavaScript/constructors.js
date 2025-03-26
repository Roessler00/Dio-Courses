function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é: ${this.nome} e Minha idade é: ${this.idade} anos.`);
};

const joao = new Pessoa("João", 24);

joao.falar();
