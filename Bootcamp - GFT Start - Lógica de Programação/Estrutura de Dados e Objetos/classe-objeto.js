class formaBolo {
  constructor(saborMassa, saborRecheio) {
    //Variavel - let
    this.saborMassa = saborMassa;
    this.saborRecheio = saborRecheio;
  }
  //Function
  escrever() {
    console.log(
      `Um delicioso bolo com ${this.saborMassa} e recheio de ${this.saborRecheio}`
    );
  }

  //Function
  assar() {
    console.log(`Assando um bolo de ${this.saborMassa}`);
  }
}

//Atribuindo valores para a classe e variaveis da classe
let boloFesta = new formaBolo("Massa de chocolate", "Nutella");
let boloPremium = new formaBolo("Massa de Baunilha", "Coco");

// Chamando as funções
boloFesta.escrever();
boloPremium.escrever();
boloFesta.assar();
