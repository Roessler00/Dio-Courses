class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }
  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return "Abaixo do Peso";
    } else if (imc < 25) {
      return "Peso Ideal";
    } else if (imc < 30) {
      return "Acima do Peso";
    } else if (imc < 40) {
      return "Obeso";
    } else {
      return "Obesidade Grave";
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classificarImc());
const joao = new Pessoa("João", 92, 1.8);
console.log(joao.classificarImc());
