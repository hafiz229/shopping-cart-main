// handle product quantity change
function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  // calculate total
  calcualteTotal();
}

// calcualate & returns total phone & case numbers
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

// subtotal calcualation
function calcualteTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  console.log(subTotal);
  const totalPrice = subTotal + tax;
  console.log(totalPrice);
  // update on the html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}

// phone increase events
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
// phone decrease events
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

// case increase events
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

// case decrease events
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
