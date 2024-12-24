// script untuk menu
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// script untuk galeri gambar
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryModal = document.getElementById("gallery-modal");
const galleryModalImg = document.getElementById("gallery-modal-img");
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    galleryModal.classList.add("active");
    galleryModalImg.src = item.querySelector("img").src;
  });
});
galleryModal.addEventListener("click", () => {
  galleryModal.classList.remove("active");
});

// script untuk validasi form kontak
const form = document.getElementById("kontak-form");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const pesanInput = document.getElementById("pesan");
form.addEventListener("submit", (event) => {
  let errorMessage = "";
  if (namaInput.value === "") {
    errorMessage += "Nama harus diisi.\n";
  }
  if (emailInput.value === "") {
    errorMessage += "Email harus diisi.\n";
  }
  if (pesanInput.value === "") {
    errorMessage += "Pesan harus diisi.\n";
  }
  if (errorMessage !== "") {
    alert(errorMessage);
    event.preventDefault();
  }
});
