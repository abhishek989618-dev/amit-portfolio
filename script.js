// ====== DYNAMIC CERTIFICATION DATA ======
const certifications = [
  {
    id: "web",
    title: "Website Design",
    icon: "fa-solid fa-globe",
    desc: "Building elegant, responsive websites with strategy.",
    img: "website-certificate.jpg",
    details:
      "Certified in Advanced Web Development (2023) with over 15 successful projects delivered for clients in branding and ecommerce."
  },
  {
    id: "figma",
    title: "Figma",
    icon: "fa-brands fa-figma",
    desc: "Expert in UX/UI prototyping and collaborative design.",
    img: "figma-certificate.jpg",
    details:
      "Completed Figma Masterclass (2024). Designed over 50 modern user interfaces with intuitive flow and brand consistency."
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: "fa-solid fa-bullhorn",
    desc: "Amplifying brand presence with smart strategies.",
    img: "marketing-certificate.jpg",
    details:
      "Certified Digital Marketer (Google, 2024). Managed campaigns across social and SEO platforms achieving 40% engagement growth."
  }
];

// ====== BUILD DYNAMIC SECTION ======
const container = document.getElementById("certContainer");

certifications.forEach(cert => {
  const card = document.createElement("div");
  card.classList.add("cert-card");
  card.innerHTML = `
    <i class="${cert.icon}"></i>
    <h3>${cert.title}</h3>
    <p>${cert.desc}</p>
    <div class="cert-content" id="${cert.id}">
      <img src="${cert.img}" alt="${cert.title} Certificate" />
      <p>${cert.details}</p>
    </div>
  `;
  card.addEventListener("click", () => toggleCert(cert.id));
  container.appendChild(card);
});

// ====== TOGGLE CERT DISPLAY ======
function toggleCert(id) {
  const section = document.getElementById(id);
  const isVisible = section.style.display === "block";
  document.querySelectorAll('.cert-content').forEach(c => c.style.display = 'none');
  section.style.display = isVisible ? "none" : "block";
}
