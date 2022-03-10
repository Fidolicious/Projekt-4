
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


// CAROLINE //