//displaying slides
let slideIndex = 0;

showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
 
showCard();
function showCard (){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
   
    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
    });
};

//add items to the card
addToCard();
function addToCard() {
    
    const cardBtn = document.querySelectorAll('.store-item-icon');

    cardBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
              
            if (e.target.parentElement.classList.contains('store-item-icon')) {
                const item = {};
                let name = e.target.parentElement.parentElement.children[0].textContent;
                let model = e.target.parentElement.parentElement.children[1].textContent;
                let price = e.target.parentElement.parentElement.children[3].textContent;
                
                item.name  = name;
                item.model = model;
                item.price = price;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');

               cartItem.innerHTML= `
                      <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}-${item.model}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price mb-0 ">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </a>`;

                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert('Item added to the cart!');
                const tot= document.querySelector('#cart-total');
                showTotal();
                clearCart();
            }
                
        })
        
    })
    //Calculating Total
    function showTotal() {

        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
       
        items.forEach(function (it) {
            total.push(parseFloat(it.textContent));
        })
 
       
        const totalSum = total.reduce(function (acc, it) {
            acc += it;
            return acc;
        }, 0);

        const finalMoney = totalSum.toFixed(2);
        if (document.getElementById('cart-total').textContent != null)
            document.getElementById('cart-total').textContent = finalMoney;
        
        
    }

    //Clearing the cart 
    clearCart();
    function clearCart() {
        
        const clearBtn = document.getElementById('clear-cart');
        const items = document.querySelectorAll('.cart-item');
        const total = document.querySelector('#cart-total');
    
        clearBtn.addEventListener('click', function () {
            items.forEach(function (item) {

                item.remove();

            })
            total.textContent = '0';

        }); 
    }
}

//customers reviews
const reviews = [

    {
        id: 1,
        name: 'Michael Smith',
        job: 'Architect',
        img: 'img/Michael.jpg',
        text: 'Excellent products.I love their professionalism. Highly recommend!'
    },

    {
        id: 2,
        name: 'Joseph Sween',
        job: 'Student',
        img: 'img/Joseph.jpg',
        text: 'Lee Smith was extremely helpful and informative, a pleasure to speak with! I will always use Love energy for any future requirements! I would recommennd this shop to my friends!'
    },

    {
        id: 3,
        name: 'Nina Rodriguez',
        job: 'Marketing Specialist',
        img: 'img/Anna.jpg',
        text: '"Got a really good deal on our vacation tickets.I really belive in this company and hope that in several years to grow even more. The staff is so respectful and effective at answering your calls!"',
    },

    {
        id: 4,
        name: 'Sara Monteo',
        job: 'UI/UX Designer',
        img: 'img/Sara.jpg',
        text: 'Beautifully presented, given as several gifts with great reviews from others.',
    },
    {
        id: 5,
        name: 'Annie Wolfram',
        job: 'DJ',
        img: 'img/Annie.jpg',
        text: 'Very good prices. I recommennd!',
    },
    {
        id: 6,
        name: 'John Linn',
        job: 'Assistent Manager',
        img: 'img/John.jpg',
        text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
    },
    {
        id: 7,
        name: 'Mike Arnold',
        job: 'Antreprenour',
        img: 'img/Mike.jpg',
        text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },


];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
info.style.fontWeight = '700';
info.style.letterSpacing = '1px';

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
// load starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});


//show person on item x 
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//functionality for prev-next buttons
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem < reviews.length) {
        showPerson(currentItem);
    }
    else {
        currentItem = 0;
        showPerson(currentItem);
    }

})
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
        showPerson(currentItem);
    }
    else {
        showPerson(currentItem);
    }

})
randomBtn.addEventListener('click', function () {
    const random = Math.floor(Math.random() * reviews.length);
    showPerson(random);
})


 //Modal
aboutBrand();
function aboutBrand() {

    const open = document.querySelector('.open');
    const modal = document.querySelector('.modal-container');
    const close = document.querySelector('.close');
    const bg = document.querySelector('.modal');

    open.addEventListener('click', function () {
        
        modal.classList.add('show');
        bg.style.display = 'block';
        
    })

    close.addEventListener('click', function () {
        modal.classList.remove('show');
        bg.style.display = 'none';
    })

}