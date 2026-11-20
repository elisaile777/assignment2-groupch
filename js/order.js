
document.addEventListener("DOMContentLoaded", function () {

  const productPage = document.querySelector(".product-page");

  if (!productPage) return;

  // PRODUCT IMAGE GALLERY
  const productImage = document.querySelector(".product-image");
  const previousButton = document.querySelector(".gallery-arrow.previous");
  const nextButton = document.querySelector(".gallery-arrow.next");

  const frontImage = productImage.dataset.front;
  const backImage = productImage.dataset.back;

  let showingFront = true;

  function changeImage() {
    showingFront = !showingFront;

    productImage.src = showingFront ? frontImage : backImage;

    productImage.alt = showingFront
      ? "Product front view"
      : "Product back view";
  }

  previousButton.addEventListener("click", changeImage);
  nextButton.addEventListener("click", changeImage);

  // SIZE SELECTION
  const sizeButtons = document.querySelectorAll(".size-button");
  let selectedSize = "";

  sizeButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      sizeButtons.forEach(function (item) {
        item.classList.remove("selected");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");

      selectedSize = button.dataset.size;
    });
  });

  // QUANTITY CONTROL
  const quantityDisplay = document.querySelector(".quantity-value");
  const minusButton = document.querySelector(".quantity-minus");
  const plusButton = document.querySelector(".quantity-plus");

  let quantity = 1;

  minusButton.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  plusButton.addEventListener("click", function () {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  // ORDER BUTTON
  const orderButton = document.querySelector(".order-button");
  const orderMessage = document.querySelector(".order-message");

  orderButton.addEventListener("click", function () {

    if (!selectedSize) {
      orderMessage.textContent = "Please select your shirt size first.";
      return;
    }

    const productName = productPage.dataset.product;
    const price = Number(productPage.dataset.price);
    const total = price * quantity;

    const subject = "Order Inquiry - " + productName;

    const body =
      "Hello T-Coude!\n\n" +
      "I would like to order the following:\n\n" +
      "Product: " + productName + "\n" +
      "Size: " + selectedSize + "\n" +
      "Quantity: " + quantity + "\n" +
      "Price per shirt: PHP " + price.toFixed(2) + "\n" +
      "Total: PHP " + total.toFixed(2) + "\n\n" +
      "Please let me know the next steps. Thank you!";

    const emailLink =
      "mailto:hello@examplewebsite142.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = emailLink;
  });

});