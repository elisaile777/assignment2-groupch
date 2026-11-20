document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".product-page");
  if (!page) return;

  const image = page.querySelector(".product-image");
  const previous = page.querySelector(".gallery-arrow.previous");
  const next = page.querySelector(".gallery-arrow.next");
  const sizeButtons = [...page.querySelectorAll(".size-button")];
  const quantityOutput = page.querySelector(".quantity-value");
  const minus = page.querySelector(".quantity-minus");
  const plus = page.querySelector(".quantity-plus");
  const orderButton = page.querySelector(".order-button");
  const note = page.querySelector(".order-note");

  let showingBack = false;
  let quantity = 1;
  let selectedSize = "";

  function updateImage() {
    image.src = showingBack ? image.dataset.back : image.dataset.front;
    image.alt = `${page.dataset.product} shirt - ${showingBack ? "back" : "front"} view`;
    previous.setAttribute("aria-label", showingBack ? "Show front image" : "Show front image");
    next.setAttribute("aria-label", showingBack ? "Show front image" : "Show back image");
  }

  previous.addEventListener("click", () => { showingBack = false; updateImage(); });
  next.addEventListener("click", () => { showingBack = true; updateImage(); });

  sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedSize = button.dataset.size;
      sizeButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      note.textContent = `Size ${selectedSize} selected.`;
    });
  });

  minus.addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    quantityOutput.textContent = quantity;
  });
  plus.addEventListener("click", () => {
    quantity = Math.min(99, quantity + 1);
    quantityOutput.textContent = quantity;
  });

  orderButton.addEventListener("click", () => {
    if (!selectedSize) {
      note.textContent = "Please choose a size before placing your order.";
      page.querySelector(".size-options").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const product = page.dataset.product;
    const price = page.dataset.price;
    const summary = `Order summary\\nProduct: ${product}\\nSize: ${selectedSize}\\nQuantity: ${quantity}\\nUnit price: ${price}\\n\\nPlease contact the T-cOUde team to confirm your order.`;
    window.alert(summary);
    note.textContent = "Your order details are ready. Please contact the T-cOUde team to confirm.";
  });
});
