const menu = document.querySelector('.Menu')
const close = document.querySelector('.Close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('Open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('Open-nav')
})