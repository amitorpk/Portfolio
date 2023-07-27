window.onload = function () {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile");
  const close = document.querySelector(".mobile .close")
  btn.addEventListener("click", function () {
    menu.classList.add("active");
  });

  close.addEventListener("click",function(){
    menu.classList.remove("active")
  })

};
