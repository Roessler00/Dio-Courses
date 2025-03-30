const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

async function connectToDatabase(dataName) {
  // lógica de conexão
  console.log(`Conectado ao banco: ${dataName}`);
}

async function disconnectDatabase() {
  console.log("Desconectando do bando de dados");
}

export { connectToDatabase, disconnectDatabase, databaseType };

// module.exports = {
//   connectToDatabase,
//   disconnectDatabase,
// }
