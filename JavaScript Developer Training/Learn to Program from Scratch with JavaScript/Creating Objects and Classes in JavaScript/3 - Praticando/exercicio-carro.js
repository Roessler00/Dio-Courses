class Carro {
  marca;
  cor;
  consumoMedioKM;

  constructor(marca, cor, consumoMedioKM) {
    this.marca = marca;
    this.cor = cor;
    this.consumoMedioKM = consumoMedioKM;
  }

  calcularGastoDeViagem(distanciaKM, precoCombustivel) {
    return distanciaKM * this.consumoMedioKM * precoCombustivel;
  }
}

const uno = new Carro("Fiat", "Vermelho", 1 / 15);
console.log(uno.calcularGastoDeViagem(70, 6.99));

const peugeot207 = new Carro("Peugeot", "Branco", 1 / 12);
console.log(peugeot207.calcularGastoDeViagem(70, 6.99));
