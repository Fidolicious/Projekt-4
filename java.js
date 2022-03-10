
// JEANETT //
document.addEventListener ("DOMContentLoaded", () => {
  const loginForm = document.querySelector ("#login");
  const createAccountForm = document.querySelector ("#createAccount");

  document.querySelector ("#linkCreateAccount").addEventListener("click, () => {
    loginForm.classList.add("form-hidden");
    createAccountForm.classList.add("form-hidden");
  });
});

// ANNE-SOFIE //


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
















var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 7000;	// Time Between Switch

// Image List
images[0] = "img/billede1.jpg";
images[1] = "img/billede2.jpg";
images[2] = "img/billede3.jpg";

// Change Image
function changeImg(){
document.slide.src = images[i];

// Check If Index Is Under Max
if(i < images.length - 1){
  // Add 1 to Index
  i++;
} else {
  // Reset Back To O
  i = 0;
}

// Run function every x seconds
setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;






// CAROLINE //
