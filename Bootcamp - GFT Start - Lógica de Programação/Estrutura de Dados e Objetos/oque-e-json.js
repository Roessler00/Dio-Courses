// JSON = JavaScript Object Notation
// Chaves e Valor com o objetivo de transferir dados

let name = "João";
let age = 24;
let products = ["Mouse 2XWM", "Teclado Mecânico", "Monitor"];
let productsValues = [29.9, 129.99, 899.99];

generateInvoice(name, age, products, productsValues);

function generateInvoice(name, age, products, productsValues) {
  console.log("O comprador é: " + name);
  console.log("A idade é: " + age);
  console.log("--------------");
  console.log("O produto é: " + products[0]);
  console.log("O valor é: " + productsValues[0]);
}

// SEM JSON
