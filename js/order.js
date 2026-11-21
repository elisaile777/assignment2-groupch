
document.addEventListener("DOMContentLoaded", function () {

  // FRONT AND BACK PRODUCT IMAGE SWITCHER
  const productImage = document.getElementById("productGalleryImage");
  const previousButton = document.getElementById("previousImage");
  const nextButton = document.getElementById("nextImage");

  if (productImage && previousButton && nextButton) {
    const frontImage = productImage.dataset.front;
    const backImage = productImage.dataset.back;

    let showingBack = false;

    function showProductImage() {
      productImage.src = showingBack ? backImage : frontImage;
      productImage.alt = showingBack
        ? "T-shirt back view"
        : "T-shirt front view";
    }

    previousButton.addEventListener("click", function () {
      showingBack = !showingBack;
      showProductImage();
    });

    nextButton.addEventListener("click", function () {
      showingBack = !showingBack;
      showProductImage();
    });
  }

  // QUANTITY BUTTONS
  document.querySelectorAll(".quantity-control").forEach(function (control) {
    const input = control.querySelector('input[name="quantity"]');
    const minus = control.querySelector(".quantity-minus");
    const plus = control.querySelector(".quantity-plus");

    if (!input || !minus || !plus) return;

    minus.addEventListener("click", function () {
      const current = Number(input.value) || 1;
      input.value = Math.max(1, current - 1);
    });

    plus.addEventListener("click", function () {
      const current = Number(input.value) || 1;
      input.value = Math.min(99, current + 1);
    });

    input.addEventListener("change", function () {
      const current = Number(input.value) || 1;
      input.value = Math.min(99, Math.max(1, current));
    });
  });

  // ORDER FORM - OPENS THE VISITOR'S EMAIL APP
  document.querySelectorAll(".order-form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const selectedSize = form.querySelector('input[name="size"]:checked');
      const quantity = form.querySelector('input[name="quantity"]');
      const productName = form.dataset.product;

      if (!selectedSize) {
        alert("Please choose your T-shirt size first.");
        return;
      }

      const quantityValue = Math.max(1, Number(quantity.value) || 1);

      const subject = "T-Coude Order Inquiry - " + productName;

      const body =
        "Hello T-Coude!\n\n" +
        "I would like to order the following:\n\n" +
        "Product: " + productName + "\n" +
        "Size: " + selectedSize.value + "\n" +
        "Quantity: " + quantityValue + "\n" +
        "Price per shirt: PHP 499\n" +
        "Estimated total: PHP " + (499 * quantityValue) + "\n\n" +
        "Please let me know the next steps. Thank you!";

      const mailto =
        "mailto:hello@examplewebsite142.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  });

});
