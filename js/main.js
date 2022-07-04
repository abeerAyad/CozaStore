
// Scroll Top
let arrow = document.querySelector('.arrow-top');
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