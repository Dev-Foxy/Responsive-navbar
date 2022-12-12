const openNav = document.getElementById("open-nav")
const closeNav = document.getElementById("close-nav")
const sideNav = document.querySelector(".side-nav")

openNav.addEventListener("click", () =>{
    sideNav.classList.add("active")
})

closeNav.addEventListener("click", () =>{
    sideNav.classList.remove("active")
})