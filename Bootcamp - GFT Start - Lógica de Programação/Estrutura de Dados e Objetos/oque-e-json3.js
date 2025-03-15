let invoice = {
  name: "João",
  age: 24,
  products: {
    0: ["Mouse 2xwm", 29.9],
    1: ["Teclado Mecânico", 129.99],
    2: ["Monitor", 899.99],
    3: ["TV 100 polegadas", 10900.99],
  },
};

generateInvoice(invoice);

function generateInvoice(invoice) {
  console.log(`O comprador é: ${invoice.name}`);
  console.log(`A idade é: ${invoice.age}`);
  console.log("--------------");

  for (let index in invoice.products) {
    let [productName, productPrice] = invoice.products[index];
    console.log(`- ${productName}: R$ ${productPrice}`);
  }
}
