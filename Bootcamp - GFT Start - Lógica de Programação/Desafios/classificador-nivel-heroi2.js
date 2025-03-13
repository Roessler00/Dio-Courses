let nickname = "Scream-Master";
let xpPoints = 10001; // Certifique-se de que xpPoints é um número
let nivel;

if (xpPoints <= 1000) {
  nivel = "Ferro";
} else if (xpPoints <= 2000) {
  nivel = "Bronze";
} else if (xpPoints <= 5000) {
  nivel = "Prata";
} else if (xpPoints <= 7000) {
  nivel = "Ouro";
} else if (xpPoints <= 8000) {
  nivel = "Platina";
} else if (xpPoints <= 9000) {
  nivel = "Ascendente";
} else if (xpPoints <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log("O Herói de nome " + nickname + " está no nível " + nivel);
