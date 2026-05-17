const questions = document.querySelectorAll(".faq-question-container")
const currentYear = document.getElementById("year")

const hamburger = document.getElementById("hamburger")
const navContainer = document.getElementById("navContainer")
const overlay = document.querySelectorAll(".overlay")
const navLinks = document.querySelectorAll(".header-navigation-link")


if (currentYear) {
    currentYear.textContent = new Date().getFullYear()
}

const year = new Date().getFullYear()
currentYear.textContent = year


let activeAnswer = null
let activeQuestion = null



function toggleMenu () {
    hamburger.classList.contains("active") ? closeMenu() : openMenu()
}

function openMenu() {
    hamburger.classList.add("active")
    navContainer.classList.add("active")

    overlay.forEach(overlay => {
    overlay.classList.add("active")
    })
}


hamburger.addEventListener("click", toggleMenu)

overlay.forEach(overlay => {
    overlay.addEventListener("click", toggleMenu)
})


function closeMenu() {
    hamburger.classList.remove("active")
    navContainer.classList.remove("active")
    overlay.forEach(overlay => {
     overlay.classList.remove("active")
    })
}


navLinks.forEach(link => {   
    link.addEventListener("click", closeMenu)
})




questions.forEach(question => {
    question.addEventListener("click", (e) => {
        if (activeQuestion === question) {
            removeAnswer()
            return
        }

        removeAnswer()

        const answerText = question.dataset.answer

        const answer = document.createElement("div")
        answer.classList.add("faq-answer")

        const inner = document.createElement("p")
        inner.textContent = answerText

        answer.appendChild(inner)
        question.appendChild(answer)

        answer.style.height = "0px"

        answer.offsetHeight

        answer.style.height = answer.scrollHeight + "px"

        question.classList.add("active")

        activeAnswer = answer
        activeQuestion = question
    })
})




document.addEventListener("click", (e) => {
    if (!e.target.closest(".faq-questions-container")) {
        removeAnswer()
    }
})




function removeAnswer() {
    if (!activeAnswer) return

    const answer = activeAnswer
    const question = activeQuestion

    answer.style.height = activeAnswer.scrollHeight + "px"

    requestAnimationFrame(() => {
        answer.style.height = "0px"
    })

    question.classList.remove("active")

    setTimeout(() => {
        answer.remove()
    }, 300)

    activeAnswer = null
    activeQuestion = null
}



































