const [red, green, blue] = [0, 24, 183]
const main = document.querySelector('.body')

function changeColorOnScroll(){
    const scrolled = 1 + (window.scrollY)/95
    const [r, g, b] = [red/scrolled, green/scrolled, blue/scrolled].map(Math.round)
    main.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
window.addEventListener('scroll', changeColorOnScroll)

var i = 0
var mainName = 'Pranav Kondapaneni'

// Change to typing effect with cursor.
function typingEffect(){
    if(i < mainName.length){
        document.getElementById('name').innerHTML += mainName.charAt(i)
        i++
        setTimeout(typingEffect, 100)
    }
}
setTimeout(typingEffect, 100)