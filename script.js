function openForm(product) {
  document.getElementById("interestForm").style.display = "block";
  document.getElementById("productInput").value = product;
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
