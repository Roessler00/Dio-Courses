const productPrice = 99.9;
const paidByDebit = (productPrice - (productPrice / 100) * 10).toFixed(2);
const paidInCash = (productPrice - (productPrice / 100) * 15).toFixed(2);
const paidOnCredit2x = productPrice;
const paidOnCredit3x = (productPrice + (productPrice / 100) * 10).toFixed(2);

let paymentType = "credit2x";

if (paymentType === "debit") {
  console.log(
    `The product price is: R$${productPrice} - You chose to pay by Debit - You will pay for the product ${paidByDebit}`
  );
} else if (paymentType === "cash") {
  console.log(
    `The product price is: R$${productPrice} - You chose to pay by Cash - You will pay for the product ${paidInCash}`
  );
} else if (paymentType === "credit2x") {
  console.log(
    `The product price is: R$${productPrice} - You chose to pay by Credit up to 2x - You will pay for the product ${paidOnCredit2x}`
  );
} else {
  console.log(
    `The product price is: R$${productPrice} - You chose to pay by Credit more than 2x - You will pay for the product ${paidOnCredit3x}`
  );
}
