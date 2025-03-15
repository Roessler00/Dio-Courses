createStringConnection1("db_products");

function createStringConnection1(databaseName) {
  console.log(
    "Connect:DBCONNECT;user=felipe;pass=1234;initial_database= " + databaseName
  );
}

// Interpolação de Strings, ao invés de usar "aspas", se utiliza `crase` e ${}
createStringConnection2("db_products", "joao", "4321");

function createStringConnection2(databaseName, user, pass) {
  console.log(
    `Connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`
  );
}
