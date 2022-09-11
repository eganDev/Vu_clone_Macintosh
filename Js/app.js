const search = document.querySelector('.search-bar')
const delButton = document.querySelector('#search_delbtn')
const menuToggle = document.querySelector('.menu_toggle')
const activeNavigation = document.querySelector('.navigation')
const openSildeSoftware = document.querySelector('.software')
const slidebar1 = document.querySelector('.slide_bar_1')
//clear input of search bar
delButton.onclick = function() {
    document.getElementById('search').value = ''
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

