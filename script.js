document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const params = new URLSearchParams(location.search);
  const regiao = params.get("regiao");
  const heading = document.getElementById("region-heading");
  const title = document.getElementById("page-title");

  if (regiao) {
    if (heading) heading.textContent = regiao;
    if (title) title.textContent = `Cozinha Regional: ${regiao}`;
    document.title = `Cozinha Regional: ${regiao}`;
  }
});
