class hero {
  constructor(heroName, heroAge, heroClass, heroAttack) {
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.heroClass = heroClass;
    this.heroAttack = heroAttack;
  }
  attack() {
    console.log(
      `O ${this.heroClass}, ${this.heroName} atacou usando ${this.heroAttack}`
    );
  }
}

let mago = new hero("Luke", 27, "Mago", "Magia");
let guerreiro = new hero("Obi-Wan", 61, "Guerreiro", "Espada");
let monge = new hero("Anakin", 45, "Monge", "Artes Marciais");
let ninja = new hero("Han Solo", 25, "Ninja", "Shuriken");

mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();
