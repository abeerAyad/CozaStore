
// Scroll Top
let arrow = document.querySelector('.arrow-top');
let nav = document.querySelector('.navbar');
window.addEventListener('scroll',(e) => {
    if(scrollY >= 300) {
        arrow.style.display ='block';
        

    } else {
        arrow.style.display ='none';


    }
})

arrow.onclick = () => {
   window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
   })
}

//Change background navbar
window.addEventListener('scroll',(e) => {
    if(scrollY >= 38) {       
        nav.style.backgroundColor='#fff';
        nav.style.borderBottom ='1px solid #717fe0';
        nav.style.top='0';
    } else {
        nav.style.removeProperty("background-color");
        nav.style.removeProperty("border-bottom");
        nav.style.top='40px';
    }
})

let close = document.querySelector('.close');
let search = document.querySelector('.search');
let searchOverlay = document.querySelector('.search-overlay');

search.addEventListener('click',showPopup);
function showPopup() {
    searchOverlay.style.top='0';
}

close.addEventListener('click',closePopup);
function closePopup() {
    searchOverlay.style.top='-100%'

}