// ANNE-SOFIE //
// Cart
let heartIcon = document.querySelector("#heart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
heartIcon.onclick = () => {
	cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
	cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == "loading") {
	document.addEventListener("DOMContentLoaded", ready);
} else {
	ready();
}

// Making Function
function ready(){
	//Reomve Items From Cart
	var reomveCartButtons = document.getElementsByClassName("cart-remove");
	console.log(reomveCartButtons);
	for (var i = 0; i < reomveCartButtons.length; i++){
		var button = reomveCartButtons[i]
		button.addEventListener("click", removeCartItem);
	}

	// Add To Cart
	var addCart = document.getElementsByClassName("add-cart");
	for (var i = 0; i < addCart.length; i++) {
		var button = addCart[i];
		button.addEventListener("click", addCartClicked);
	}

}


	// Reomve Items From Cart
	function removeCartItem(event) {
		var buttonClicked = event.target;
		buttonClicked.parentElement.remove();
	}


// Add To cart
function addCartClicked(event) {
	var button = event.target;
	var shopProducts = button.parentElement;
	var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
	var price = shopProducts.getElementsByClassName("price")[0].innerText;
	var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
	addProductToCart(title, price, productImg);
}

// Button Effect
const btn = document.getElementById('btn');
let index = 0;
const colors = ['salmon', '#1A444E'];
btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';
  index = index >= colors.length - 1 ? 0 : index + 1;
});

const btn2 = document.getElementById('btn2');
let index2 = 0;
const colors2 = ['salmon', '#1A444E'];
btn2.addEventListener('click', function onClick() {
  btn2.style.backgroundColor = colors2[index2];
  btn2.style.color = 'white';
  index2 = index2 >= colors2.length - 1 ? 0 : index2 + 1;
});

const btn3 = document.getElementById('btn3');
let index3 = 0;
const colors3 = ['salmon', '#1A444E'];
btn3.addEventListener('click', function onClick() {
  btn3.style.backgroundColor = colors3[index3];
  btn3.style.color = 'white';
  index3 = index3 >= colors3.length - 1 ? 0 : index3 + 1;
});

const btn4 = document.getElementById('btn4');
let index4 = 0;
const colors4 = ['salmon', '#1A444E'];
btn4.addEventListener('click', function onClick() {
  btn4.style.backgroundColor = colors4[index4];
  btn4.style.color = 'white'
  index4 = index4 >= colors4.length - 1 ? 0 : index4 + 1;
});

const btn5 = document.getElementById('btn5');
let index5 = 0;
const colors5 = ['salmon', '#1A444E'];
btn5.addEventListener('click', function onClick() {
  btn5.style.backgroundColor = colors5[index5];
  btn5.style.color = 'white';
  index5 = index5 >= colors5.length - 1 ? 0 : index5 + 1;
});

const btn6 = document.getElementById('btn6');
let index6 = 0;
const colors6 = ['salmon', '#1A444E'];
btn6.addEventListener('click', function onClick() {
  btn6.style.backgroundColor = colors6[index6];
  btn6.style.color = 'white';
  index6 = index6 >= colors6.length - 1 ? 0 : index6 + 1;
});

// Copy to cart
function addProductToCart(title, price, productImg) {
	var cartShopBox = document.createElement("div");
	cartShopBox.classList.add("cart-box");
	var cartItems = document.getElementsByClassName("cart-content")[0];
	var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
	for (var i = 0; i < cartItemsNames.length; i++) {
		if (cartItemsNames [i].innerText == title) {
		return;
	}
}

var cartBoxContent = `
								<img src="${productImg}" alt="" class="cart-img">
								<div class="detail-box">
										<div class="cart-product-title">${title}</div>
										<div class="cart-price">${price}</div>
										<input type="number" value="1" class="cart-quantity">
								</div>
								<button class='bx bxs-trash-alt cart-remove'></button>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}


//To the top button
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
