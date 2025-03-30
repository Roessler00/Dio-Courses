// * = utilizado para importar tudo (all)
// as = usado para nomear como se fosse uma const
// from = o caminho onde está o arquivo. Precisa colocar o tipo de arquivo. Ex.: .js ou .mjs

// import * as database from "./utils/database.js";

// Destructuring
import { connectToDatabase, databaseType } from "./utils/database.js";
import * as api from "./utils/api.js";
// const database = require("./utils/database.js")

api.getDataFromApi();
connectToDatabase("my-database");
console.log(databaseType);
// database.connectToDatabase("my-database");
// database.disconnectDatabase();
