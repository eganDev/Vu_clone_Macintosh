const search = document.querySelector('.search')
const menuToggle = document.querySelector('.menu_toggle')
const activeNavigation = document.querySelector('.navigation')
const openSildeSoftware = document.querySelector('.software')
const slidebar1 = document.querySelector('.slide_bar_1')
const icon = document.querySelector('.icon_search')
const clear = document.querySelector('.delete_search')

//clear input of search bar

icon.onclick = function() {
    search.classList.toggle('open')
}
clear.onclick = function() {
    document.getElementById('mysearch').value = ''
}
//keydown off usernav
document.addEventListener('keydown', function(e){
    if (e.keyCode == 27) {
        activeNavigation.classList.remove('active')
    }
})


openSildeSoftware.onclick = function() {
    slidebar1.classList.toggle('act')
}

//funtion of click feature

document.addEventListener('click', function(e){
    if (menuToggle.contains(e.target)) {
        activeNavigation.classList.toggle('active')
    } else {
        activeNavigation.classList.remove('active')
    }
})
//slider 
let slide = tns({
    container: '.slide_run',
    navPosition: "bottom",
    controlsPosition: "bottom",
    controls: false,
    items: 1,
    gutter: 20,
    slideBy: 1,
    "mouseDrag": true,
    "autoplay": true,
    autoplayButtonOutput: false,
    speed: 500,
    autoplayTimeout:4000,
})

//slider2
// let slide_2 = tns({
//     container: '.error_content',
//     "items": 3,
//     // "slideBy": "page",
//     "mouseDrag": true,
//     // "swipeAngle": false,
//     "speed": 2000,
//     "autoplay": true,

//     nav: false,
//     slideBy:1,
//     controls: false,
//     gutter:35,
//     navPosition: "bottom",
//     controlsPosition: "bottom",
//     controls: false,
//     autoplayButtonOutput:false,
//     autoplayTimeout:10000,
// })


let slide3 = tns({
    container: '.game_ct_0',
    items:1,
    nav: false,
    slideBy:1,
    controls: false,
    navPosition: "bottom",
    controlsPosition: "bottom",
    controls: false,
    autoplayButtonOutput:false,
    autoplayTimeout:6000,
    autoplayDirection: "backward",
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 2000,
    "autoplay": true,
})

// let slide4 = tns({
//     container: '.game_ct_2_main',
//     "axis": "vertical",
//     items: 3,
//     nav: false,
//     slideBy:1,
//     controls: false,
//     navPosition: "bottom",
//     controlsPosition: "bottom",
//     controls: false,
//     autoplayButtonOutput:false,
//     // autoplayTimeout:5000,
//     // autoplayDirection: "forward",
//     "mouseDrag": true,
//     "swipeAngle": false,
//     "speed": 2000,
//     // "autoplay": true,
// })