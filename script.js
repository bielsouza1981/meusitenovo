document.addEventListener("DOMContentLoaded", function() {
  const homeBox = document.getElementById("home-box");
  const menu = document.getElementById("menu");

  homeBox.addEventListener("mouseover", function() {
    menu.classList.remove("hidden");
  });

  homeBox.addEventListener("mouseout", function() {
    menu.classList.add("hidden");
  });
});
