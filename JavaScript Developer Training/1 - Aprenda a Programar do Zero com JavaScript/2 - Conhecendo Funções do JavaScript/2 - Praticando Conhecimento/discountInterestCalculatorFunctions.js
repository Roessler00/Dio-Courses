function paymentMethodName(paymentMethod) {
  if (paymentMethod === 1) {
    return "your Payment Method is: Debit";
  } else if (paymentMethod === 2) {
    return "your Payment Method is: Cash";
  } else if (paymentMethod === 3) {
    return "your Payment Method is: Credit up to 2x";
  } else {
    return "your Payment Method is: Credit more than 2x";
  }
}

function applyDiscount(priceTag, paymentMethod) {
  if (paymentMethod === 1) {
    return (priceTag - priceTag * 0.1).toFixed(2);
  } else if (paymentMethod === 2) {
    return (priceTag - priceTag * 0.15).toFixed(2);
  } else if (paymentMethod === 3) {
    return priceTag;
  } else {
    return (priceTag + priceTag * 0.1).toFixed(2);
  }
}

(function (productPrice, paymentMethod) {
  const paymentMethodText = paymentMethodName(paymentMethod);
  const finalPrice = applyDiscount(productPrice, paymentMethod);

  console.log(
    `Your product costs: $${productPrice}, ${paymentMethodText}, and you will pay: $${finalPrice}`
  );
})(99.9, 2);
