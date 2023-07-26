window.onload = function () {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile");
  btn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
};
