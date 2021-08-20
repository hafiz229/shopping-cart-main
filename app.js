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
