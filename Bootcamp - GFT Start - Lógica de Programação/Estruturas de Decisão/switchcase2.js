let fruta = "banana";

switch (fruta) {
  case "laranja":
    console.log("Suco de Laranja");
    break;

  case "banana":
  case "morango":
    console.log("Vitamina de " + fruta);
    break;

  case "maça":
    console.log("Suco de Maçã");
    break;

  default:
    console.log("Suco Genérico");
}
