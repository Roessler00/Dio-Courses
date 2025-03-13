let idadeMinima = 18;
let idadeUsuario = 17;
let idadePermitida = idadeUsuario > idadeMinima;

console.log(idadePermitida);

idadeUsuario = 18;
idadePermitida = idadeUsuario >= idadeMinima;
console.log(idadePermitida);

let idadeDeCorte = 50;
let idadeDoUsuario = 45;
let resultadoTerceiraIdade = idadeDeCorte < idadeDoUsuario;

console.log(resultadoTerceiraIdade);

idadeDoUsuario = 55;
resultadoTerceiraIdade = idadeDeCorte < idadeDoUsuario;
console.log(resultadoTerceiraIdade);

idadeDoUsuario = 50;
resultadoTerceiraIdade = idadeDeCorte <= idadeDoUsuario;
console.log(resultadoTerceiraIdade);
