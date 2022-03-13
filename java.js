console.log('hej');
// JEANETT //
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", e => {
      e.preventDefault();

      // Perform your AJAX/Fetch login

      setFormMessage(loginForm, "error", "Forkert brugernavn eller adgangskode");
  });

  document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
              setInputError(inputElement, "Username must be at least 10 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
});
// ANNE-SOFIE //
// Cart
let heartIcon = document.querySelector("#heart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")
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
	//Quantity Changes
	var quantityInputs = document.getElementsByClassName("cart-quantity");
	for (var i = 0; i < quantityInputs.length; i++) {
		var input = quantityInputs[i];
		input.addEventListener("change", quantityChanged);
	}
	// Add To Cart
	var addCart = document.getElementsByClassName("add-cart");
	for (var i = 0; i < addCart.length; i++) {
		var button = addCart[i];
		button.addEventListener("click", addCartClicked);
	}
	//Buy Button Work
	document.addElementsByClassName("buy-btn")[0].addEventListener("click", buyButtonClicked);
}
// Buy Button
function buyButtonClickked() {
	alert("Your Order is placed");
	var cartContent = document.getElementsByClassName("cart-content")[0];
	while (cartContent.hasChildNodes()) {
		cartContent.removeChild(cartContent.firstChild);
	}
}



	// Reomve Items From Cart
	function removeCartItem(event) {
		var buttonClicked = event.target;
		buttonClicked.parentElement.remove();
		updatetotal();
	}
	// Qantity Changes
	function quantityChanged(event) {
		var input = event.target;
		if (isNaN(input.value) || input.value <= 0) {
			input.value = 1;
		}
		updatetotal();
	}

// Add To cart
function addCartClicked(event) {
	var button = event.target;
	var shopProducts = button.parentElement;
	var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
	var price = shopProducts.getElementsByClassName("price")[0].innerText;
	var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
	addProductToCart(title, price, productImg);
	updatetotal();
}

function addProductToCart(title, price, productImg) {
	var cartShopBox = document.createElement("div");
	cartShopBox.classList.add("cart-box");
	var cartItems = document.getElementsByClassName("cart-content")[0];
	var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
	for (var i = 0; i < cartItemsNames.length; i++) {
		if (cartItemsNames [i].innerText == title) {
		alert("Denne bog er allerede i dine favoritter");
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
								<i class='bx bxs-trash-alt cart-remove'></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}


	// Update Total
	function updatetotal() {
		var cartContent = document.getElementsByClassName("cart-content")[0];
		var cartBoxes = cartContent.getElementsByClassName("cart-box");
		var total = 0;
		for (var i = 0; i < cartBoxes.length; i++) {
			var cartBox = cartBoxes[i];
			var priceElement = cartBox.getElementsByClassName("cart-price")[0];
			var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
			var price = parseFloat(priceElement.innerText.replace("$", ""));
			var quantity = quantityElement.value;
			total = total + price * quantity;
			// If price Contain some Cents Value
			total = Math.round(total * 100) / 100;
			}
			document.getElementsByClassName("total-price")[0].innerText = "$" + total;

	}

  // image --animation to cart ---//
  var image = e.target.parentNode.querySelector('img');
  var span = e.target.parentNode.querySelector('span');
  var s_image = image.cloneNode(false);
  span.appendChild(s_image);
  span.classList.add("active");
  setTimeout(()=>{
    span.classList.remove("active");
    span.removeChild(s_image);
  }, 500);

// NICKLAS //


// RUNE //
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdownmenu')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ABDULLAHI //








// CAROLINE //
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
