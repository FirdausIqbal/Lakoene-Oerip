const menuBars = document.getElementById("bars")
const close = document.getElementById("close")
const sidebars = document.querySelector(".navbar .nav-item")
const navItem = document.querySelectorAll(".nav-item li")
menuBars.addEventListener('click', () => {
    sidebars.classList.toggle("open")
})

close.addEventListener("click", () => menuBars.click())
navItem.forEach(item => item.addEventListener('click', () => menuBars.click()))