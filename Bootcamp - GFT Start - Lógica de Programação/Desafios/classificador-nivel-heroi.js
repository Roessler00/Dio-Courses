let nickname = "Scream-Master";
let xpPoints = "abc";
let nivel;

switch (true) {
  case xpPoints <= 1000:
    nivel = "Ferro";
    break;
  case xpPoints >= 1001 && xpPoints <= 2000:
    nivel = "Bronze";
    break;
  case xpPoints >= 2001 && xpPoints <= 5000:
    nivel = "Prata";
    break;
  case xpPoints >= 5001 && xpPoints <= 7000:
    nivel = "Ouro";
    break;
  case xpPoints >= 7001 && xpPoints <= 8000:
    nivel = "Platina";
    break;
  case xpPoints >= 8001 && xpPoints <= 9000:
    nivel = "Ascendente";
    break;
  case xpPoints >= 9001 && xpPoints <= 10000:
    nivel = "Imortal";
    break;
  case xpPoints >= 10001:
    nivel = "Radiante";
    break;
  default:
    nivel = "não Identificado";
}

console.log("O Herói de nome " + nickname + " está no nível " + nivel);
