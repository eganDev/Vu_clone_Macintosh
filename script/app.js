const search = document.querySelector('.search-bar')
const delButton = document.querySelector('#search_delbtn')
const menuToggle = document.querySelector('.menu_toggle')
const activeNavigation = document.querySelector('.navigation')

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

//funtion of click feature

document.addEventListener('click', function(e){
    if (menuToggle.contains(e.target)) {
        activeNavigation.classList.toggle('active')
    } else {
        activeNavigation.classList.remove('active')
    }
})
