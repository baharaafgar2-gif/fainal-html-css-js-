
const container = document.getElementById('productContainer') || document.getElementById('shopProducts');

if(container){
products.forEach((product,index)=>{
container.innerHTML += `
<div class="col-md-3 mb-4">
<div class="card h-100">
<img src="${product.image}" class="card-img-top" alt="${product.name}">
<div class="card-body">
<h5>${product.name}</h5>
<p>$${product.price}</p>
<button class="btn btn-warning addToCart" data-id="${index}">Add To Cart</button>
</div>
</div>
</div>
`;
});
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('click',(e)=>{
if(e.target.classList.contains('addToCart')){
const id = e.target.dataset.id;
cart.push(products[id]);
localStorage.setItem('cart',JSON.stringify(cart));
alert('Added to cart');
}
});

const darkBtn = document.getElementById('darkModeBtn');

if(darkBtn){
darkBtn.addEventListener('click',()=>{
document.body.classList.toggle('light-mode');
});
}

const searchInput = document.getElementById('searchInput');

if(searchInput){
searchInput.addEventListener('keyup',()=>{
const value = searchInput.value.toLowerCase();
const cards = document.querySelectorAll('.col-md-3');

cards.forEach(card=>{
card.style.display = card.innerText.toLowerCase().includes(value)
? 'block'
: 'none';
});
});
}
