const socialBtn = document.getElementById("toggleSocial");
const dropdown = document.querySelector(".social-dropdown");

const links = {
  wa: "https://wa.me/6282328457092",
  ig: "https://instagram.com/varel.zenittt",
  tt: "https://tiktok.com/@vareloin"
};

socialBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

document.querySelectorAll(".social-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const app = btn.dataset.app;
    window.location.href = links[app];
  });
});