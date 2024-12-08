function openForm(product) {
  document.getElementById("interestForm").style.display = "block";
  document.getElementById("productInput").value = product;
}
function filterProducts() {
  const filter = document.getElementById("filter").value;
  const products = document.querySelectorAll(".product");
  const productGrid = document.querySelector(".product-grid");

  let visibleCount = 0;

  products.forEach((product) => {
    if (filter === "all" || product.classList.contains(filter)) {
      product.style.display = "block"; // Show matching products
      visibleCount++;
    } else {
      product.style.display = "none"; // Hide others
    }
  });

  // Center-align grid if only one product is visible
  if (visibleCount === 1) {
    productGrid.style.justifyContent = "center";
  } else {
    productGrid.style.justifyContent = "normal";
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  emailjs
    .send("service_k91v9gy", "template_y6venrk", {
      product: document.getElementById("productInput").value,
      phone: document.getElementById("phone").value,
    })
    .then(
      function () {
        alert("Thank you! We’ll get in touch soon.");
        document.getElementById("interestForm").style.display = "none";
      },
      function (error) {
        alert("Failed to send your request. Please try again.");
        console.log(error);
      }
    );
});
