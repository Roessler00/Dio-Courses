class Pessoa {
  constructor(name) {
    this.name = name;
  }
}

const lista = [
  new Pessoa("João"),
  new Pessoa("Ricardo"),
  new Pessoa("Roessler"),
  new Pessoa("Santos"),
];

const listaNomes = lista.map((element) => element.name);

console.log(listaNomes);
