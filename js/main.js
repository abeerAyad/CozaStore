
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


// Show Popup Search
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
//Show Cart
let cartShopping = document.querySelector('.cart-shopping');
let closeCart = document.querySelector('.close-cart');
let cart = document.querySelector('.cart')
cartShopping.addEventListener('click',showCart);

closeCart.addEventListener('click',hideCart);
function showCart() {
    cart.style.right='0'
}
function hideCart() {
    cart.style.right='-100%';
}

let fullHeart = document.querySelectorAll('.description i');
let outerPopup = document.querySelector('.outer-popup')
let check = document.querySelector('.check');

fullHeart.forEach(element => {
        element.addEventListener('click',() => {
        element.style.fontWeight='600'; 
            // outerPopup.style.transform ='scale(1)';
            // console.log((element.getAttribute('style') === 'font-weight=600'))
            //         if((element.getAttribute('style') === 'font-weight=600')) {
            //         outerPopup.style.display ='none';

            //         } else {
            //             outerPopup.style.transform ='scale(1)';

            //         }
                        outerPopup.style.transform ='scale(1)';

        check.style.transform='scale(1)'
    });
})

let ok = document.querySelector('button');
ok.addEventListener('click',() => {
    outerPopup.style.transform='scale(0)';
})


// Filter 
let filter = document.querySelector('.arrow-filter');
let divFilter = document.querySelector('.filter');
let arrowFilter = document.querySelector('.arrow-filter .arrow-down');
console.log(arrowFilter)


filter.onclick = () => {
    divFilter.classList.toggle('toggle');
    
    arrowFilter.classList.toggle('toggle');
}

