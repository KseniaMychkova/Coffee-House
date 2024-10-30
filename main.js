const slider = document.querySelector('.slider')
const coffeeImgArr = document.querySelectorAll('.slider-img img')
const headerArr = document.querySelectorAll('.slider-header h3')
const descriptionArr = document.querySelectorAll('.slider-description p')
const priceArr = document.querySelectorAll('.slider-price p')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
let curentImgIndex = 0
const showElement = (el, i) => {
    el.style = 'display: none'
    if (i === curentImgIndex) el.style = 'display:block'
}

const renderElement = () => {
    coffeeImgArr.forEach((el, i) => showElement(el, i))

    headerArr.forEach((el, i) => showElement(el, i))

    descriptionArr.forEach((el, i) => showElement(el, i))

    priceArr.forEach((el, i) => showElement(el, i))
}

const nextItem = () => {
    curentImgIndex >= coffeeImgArr.length - 1 ? curentImgIndex = 0 : curentImgIndex++;
    renderElement()
}

rightArrow.addEventListener('click', () => nextItem())

leftArrow.addEventListener('click', () => {
    curentImgIndex <= 0 ? curentImgIndex = coffeeImgArr.length - 1 : curentImgIndex--;
    renderElement()
})

setInterval(() => nextItem(), 3000)

// const borderArrowLeft = document.querySelector('.slider div .border-arrow.left');
// const borderArrowRight = document.querySelector('.slider div .border-arrow.right');
// const left = document.querySelector('.leftArrow')
// const right = document.querySelector('.rightArrow')

// borderArrowLeft.addEventListener('mouseover', () => {
//     borderArrowLeft.style = 'background-color: #665F55'
//         // left.style = 'background-image: url()'
// });
// borderArrowLeft.addEventListener('mouseout', () => {
//     borderArrowLeft.style = 'background-color: #E1D4C9'
// })

// borderArrowRight.addEventListener('mouseover', () => {
//     borderArrowRight.style = 'background-color: #665F55'
//     right.style = 'background-image: url(./img/arrow-right-light.svg)'
// });

// borderArrowRight.addEventListener('mouseout', () => {
//     borderArrowRight.style = 'background-color: #E1D4C9'
//     right.style = 'background-image: url(./img/arrow-right.svg)'
// })


// const buttonApp = document.querySelector('.mobil-apps .links .buttons .button.button-app')
// const buttonAppIcon = document.querySelector('.mobil-apps .buttons .button-app .icon')
// const buttonGoogle = document.querySelector('.mobil-apps .buttons .button-google')

// buttonApp.addEventListener('click', () => {
//     buttonApp.style = 'background-color: #665F55; color: # E1D4C9;'
//     buttonAppIcon.sttyle = 'background-image: url(./img/icon-app-light.svg)'

// })