// Booking Button
const bookNowBtn = document.querySelector(".btn-style");

// Input Field of First & Economy Class
const fcInput = document.getElementById("fc_input");
const ecInput = document.getElementById("ec_input");

// Subtotal, Vat and Total value
const subTotalValue = document.getElementById("subTotal");
const vatValue = document.getElementById("vat");
const total = document.getElementById("total");

// Input Fields and increase validation
function increaseValue(inputField, increaseType) {
  const quantity = parseInt(inputField.value);
  let newQuantity = parseInt(inputField.value);

  if (increaseType == true) {
    newQuantity = quantity + 1;
  }
  if (increaseType == false && quantity > 0) {
    newQuantity = quantity - 1;
  }
  inputField.value = newQuantity;
}

// Calculate Total value
function calculateTotal() {
  const ticketFirstCount = parseInt(fcInput.value);
  const ticketEconoCount = parseInt(ecInput.value);

  // Subtotal Amount
  const totalPrice = ticketFirstCount * 150 + ticketEconoCount * 100;
  subTotalValue.innerText = "$" + totalPrice;

  // Tax Amount
  const tax = Math.round(totalPrice * 0.1);
  vatValue.innerText = "$" + tax;

  // Grand Total
  const grandTotal = totalPrice + tax;
  total.innerText = "$" + grandTotal;
}

document.body.addEventListener("click", function (e) {
  // Setting button class name
  let btnClass = e.target.className;
  if (btnClass == "fc_plus_btn") {
    increaseValue(fcInput, true);
    calculateTotal();
  }
  if (btnClass == "fc_minus_btn") {
    increaseValue(fcInput, false);
    calculateTotal();
  }
  if (btnClass == "ec_plus_btn") {
    increaseValue(ecInput, true);
    calculateTotal();
  }
  if (btnClass == "ec_minus_btn") {
    increaseValue(ecInput, false);
    calculateTotal();
  }
});

// Booking Button
bookNowBtn.addEventListener("click", function () {
  const message = document.querySelector(".message");
  message.style.display = "block";
  setTimeout(function () {
    message.style.display = "none";
  }, 1000);
});
