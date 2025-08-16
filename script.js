// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle")
const mainNav = document.getElementById("mainNav")

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active")
})

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href")

    // Only prevent default for hashed URLs (internal navigation)
    if (targetId.startsWith("#")) {
      e.preventDefault()

      // Close mobile menu if open
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active")
      }

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Update active link
        document.querySelectorAll("nav a").forEach((link) => {
          link.classList.remove("active")
        })
        this.classList.add("active")
      }
    }
    // Allow normal navigation for absolute URLs (like /courses.html)
  })
})

// Shloka carousel
import dailyShlokas from "./daily-shloka.js"
const shlokas = dailyShlokas
// const shlokas = [
//   {
//     text: "yada yada hi dharmasya glanir bhavati bharata<br>abhyutthanam adharmasya tadatmanam srjamy aham",
//     meaning:
//       "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.",
//     reference: "- Bhagavad-gita 4.7",
//   },
// ]

let currentShloka = 0
const shlokaText = document.getElementById("shlokaText")
const shlokaMeaning = document.getElementById("shlokaMeaning")
const shlokaReference = document.getElementById("shlokaReference")
const prevBtn = document.getElementById("prevShloka")
const nextBtn = document.getElementById("nextShloka")

function updateShloka() {
  shlokaText.innerHTML = shlokas[currentShloka].text
  shlokaMeaning.textContent = shlokas[currentShloka].meaning
  shlokaReference.textContent = shlokas[currentShloka].reference
}
updateShloka()

prevBtn.addEventListener("click", () => {
  currentShloka = (currentShloka - 1 + shlokas.length) % shlokas.length
  updateShloka()
})

nextBtn.addEventListener("click", () => {
  currentShloka = (currentShloka + 1) % shlokas.length
  updateShloka()
})

// Highlight current section in navigation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll("nav a")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (
      //    window.pageYOffset >= sectionTop &&
      //    window.pageYOffset < sectionTop + sectionHeight
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
})

// Dark mode toggle functionality
const darkModeToggle = document.getElementById("darkModeToggle")
const body = document.body
const sunIcon = darkModeToggle.querySelector(".fa-sun")
const moonIcon = darkModeToggle.querySelector(".fa-moon")
// Check for saved user preference
const currentTheme = localStorage.getItem("theme")
if (currentTheme === "dark") {
  body.classList.add("dark-mode")
  sunIcon.style.opacity = "0"
  moonIcon.style.opacity = "1"
}
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode")

  if (body.classList.contains("dark-mode")) {
    sunIcon.style.opacity = "0"
    moonIcon.style.opacity = "1"
    localStorage.setItem("theme", "dark")
  } else {
    sunIcon.style.opacity = "1"
    moonIcon.style.opacity = "0"
    localStorage.setItem("theme", "light")
  }
})

//    Google Sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwjGdUq4lhxy3m9bB3YFZxB4jj3kevROSy_EWHRelLHL0s6UOFrbBtMd52szbYDCwCn/exec"
const form = document.forms["submit-to-google-sheet"]

form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Send data to Google Sheets
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response)
    })
    .catch((error) => console.error("Error!", error.message))
  contactForm.reset()
})
