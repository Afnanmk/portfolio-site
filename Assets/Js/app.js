// SHOW NAVBAR ON SCROLL
const header = document.querySelector("header")
const sectionOne = document.querySelector(".hero")

const sectionOneOptions = {}

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("sticky-navbar")
    } else {
      header.classList.remove("sticky-navbar")
    }
  })
},
sectionOneOptions)

sectionOneObserver.observe(sectionOne)
