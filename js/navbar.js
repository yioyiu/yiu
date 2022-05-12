


window.addEventListener('scroll', () => {
    // 提取nav元素让nav的元素叫nav
    let nav = document.querySelector('nav')
    // 给nav加个class“sticky”（条件：滚轮>100）
    nav.classList.toggle('sticky', window.scrollY > 100)
})
window.addEventListener('scroll', () => {

    // 提取img元素让img的元素叫logo
    let logo = document.querySelector('img')
    // 给logo加个class“sticky”（条件：滚轮>100）
    logo.classList.toggle('sticky', window.scrollY > 100)
})