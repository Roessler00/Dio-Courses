class hero {
  constructor(heroName, heroAge, heroClass) {
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.heroClass = heroClass;
  }
  attack() {
    const attacks = {
      Mago: "A Força",
      Guerreiro: "Sabre de luz",
      Monge: "Artes marciais",
      Ninja: "Sabre de luz duplo",
    };
    const attackType = attacks[this.heroClass] || "um ataque desconhecido";
    console.log(
      `O ${this.heroClass}, ${this.heroName} atacou usando ${attackType}`
    );
  }
}

let mago = new hero("Yoda", 900, "Mago");
let guerreiro = new hero("Anakin", 45, "Guerreiro");
let monge = new hero("Qui-Gon", 60, "Monge");
let ninja = new hero("Darth Maul", 52, "Ninja");
let paladino = new hero("Luke", 53, "Paladino");

mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();
paladino.attack();
