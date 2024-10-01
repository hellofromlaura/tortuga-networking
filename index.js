

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showRight')
        } else {
            entry.target.classList.remove('showRight')
        }
    })
})

const hiddenElementsRight = document.querySelectorAll('.hiddenRight')
hiddenElementsRight.forEach((el) => observerRight.observe(el))

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showLeft')
        } else {
            entry.target.classList.remove('showLeft')
        }
    })
})

const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft')
hiddenElementsLeft.forEach((el) => observerLeft.observe(el))



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

