// SHOW NAVBAR ON SCROLL
const header = document.querySelector("header")
const sectionOne = document.querySelector(".hero")
const BACK_TO_TOP = document.querySelector(".back_to_top")
const navLink = document.querySelectorAll(".nav__link")
const navItem = document.querySelectorAll(".nav__item")

const sectionOneOptions = {
  threshold: 0.3,
}

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("sticky-navbar")
      BACK_TO_TOP.classList.add("back_to_top--intersecting")
    } else {
      header.classList.remove("sticky-navbar")
      BACK_TO_TOP.classList.remove("back_to_top--intersecting")
    }
  })
},
sectionOneOptions)

sectionOneObserver.observe(sectionOne)

// Code for changing active link on click
// navLink.forEach((link) => {
//   link.addEventListener("click", function () {
//     const activeNav = document.querySelector(".active-nav")
//     activeNav.className = activeNav.className.replace(" active-nav", "")
//     this.className += " active-nav"

//     console.log(link.classList.contains("active-nav"))
//   })
// })
