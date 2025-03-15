// JSON = JavaScript Object Notation
// Chaves e Valor com o objetivo de transferir dados

let invoice = {
  name: "João",
  age: 24,
  products: {
    0: ["Mouse 2xwm", 29.9],
    1: ["Teclado Mecânico", 129.99],
    2: ["Monitor", 899.99],
  },
};

generateInvoice(invoice);

function generateInvoice(invoice) {
  console.log(`O comprador é: ${invoice.name}`);
  console.log(`A idade é: ${invoice.age}`);
  console.log("--------------");
  console.log(`O produto é: ${invoice.products[0][0]}`);
  console.log(`O valor é: ${invoice.products[0][1]}`);
}
