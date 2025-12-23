// Fungsi untuk toggle hamburger menu
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
});

// Fungsi untuk smooth scroll ke section dari navbar
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fungsi untuk klik produk card (alert nama produk)
document.querySelectorAll(".produk-card").forEach((card) => {
  card.addEventListener("click", function () {
    const namaProduk = this.getAttribute("data-nama");
    alert(`Anda memilih: ${namaProduk}`);
    console.log(`Produk diklik: ${namaProduk}`);
  });
});

// Animasi fade-in untuk section TENTANG KAMI (dengan fallback)
const tentangSection = document.getElementById("tentang");
if (tentangSection) {
  // Fallback: Jika Intersection Observer tidak didukung, tampilkan langsung
  if (!("IntersectionObserver" in window)) {
    tentangSection.classList.add("visible");
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing setelah muncul
          }
        });
      },
      { threshold: 0.1 }
    ); // Turunkan threshold ke 10% agar lebih mudah trigger
    observer.observe(tentangSection);
  }
}
