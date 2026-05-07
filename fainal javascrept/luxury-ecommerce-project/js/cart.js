
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart(){
cartItems.innerHTML = '';
let total = 0;

cart.forEach((item,index)=>{
total += item.price;

cartItems.innerHTML += `
<div class="card p-3 mb-3">
<h5>${item.name}</h5>
<p>$${item.price}</p>
<button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
</div>
`;
});

totalPrice.innerText = total;
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem('cart',JSON.stringify(cart));
renderCart();
}

renderCart();
