const [red, green, blue] = [0, 24, 183]
const main = document.querySelector('.homePageBody')
main.style.height = `${window.innerHeight * 2}px`

function windowHeightChange(){
    document.querySelector('#name').style.marginTop = `${window.innerHeight/3}px`
    main.style.height = `${window.innerHeight * 2}px`
}
window.addEventListener('resize', windowHeightChange)

function changeColorOnScroll(){
    const scrolled = 1 + (window.scrollY)/95
    const [r, g, b] = [red/scrolled, green/scrolled, blue/scrolled].map(Math.round)
    main.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
window.addEventListener('scroll', changeColorOnScroll)

console.log(window.innerHeight);

var i = 0
var mainName = 'Pranav Kondapaneni'

// Change to typing effect with cursor.
function typingEffect(){
    document.querySelector('#name').style.marginTop = `${window.innerHeight/3}px`
    if(i < mainName.length){
        document.getElementById('name').innerHTML += mainName.charAt(i)
        i++
        setTimeout(typingEffect, 100)
    }
}
setTimeout(typingEffect, 100)