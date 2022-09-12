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

