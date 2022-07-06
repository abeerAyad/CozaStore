
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


// Counter
let counter =0;
let counts = Array.from(document.querySelectorAll('.count'));
let numCount = document.querySelector('.number').innerHTML;
numCount=counter;
counts.forEach(count => {
    count.addEventListener('click',(e)=>{
        let countType =e.target.classList[0];
        switch (countType) {
            case 'plus':
                counter++;
            break;
            case'minus': 
                if(counter === 0) {
                    e.preventDefault()
                } else {
                counter--;
                }
            break;
        }
        document.querySelector('.number').innerHTML=counter;
    })
})

// close product cart details 
let closeCartDetails = document.querySelector('.popup-cart-details .close');
let overlayModal = document.querySelector('.popup-cart-details');
let viewCart = document.querySelectorAll('.img  a');
console.log(viewCart)
viewCart.forEach(ele => {
    ele.addEventListener('click',() => {
        overlayModal.style.display='block';
    })
})

closeCartDetails.addEventListener('click',() => {
overlayModal.style.display='none'
})

// Show Details  Products img
let bigImg = document.querySelector('.full-img');
let image =bigImg.getAttribute('src')
let gallary = document.querySelectorAll('.small-img img');
gallary.forEach(item => {
    item.addEventListener('click',(e) => {
        letshowImg =e.target.getAttribute('src');
        bigImg.setAttribute('src',letshowImg)
        
    })
})

