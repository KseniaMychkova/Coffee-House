const buttons = document.querySelectorAll('.menu .menu-buttons .button')
const wrapper = document.querySelectorAll('.menu .menu-buttons .button .wrapper')



buttons.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style = 'background-color: #665F55; color: #E1D4C9;'
        wrapper.forEach(el => {
            el.style = 'background-color: #E1D4C9'
        })
    })

})


buttons.forEach(el => {
    el.addEventListener('mouseout', () => {
        el.style = 'background-color: #E1D4C9; color: #403F3D;'
        wrapper.forEach(el => {
            el.style = 'background-color: #C1B6AD;'
        })
    })
})