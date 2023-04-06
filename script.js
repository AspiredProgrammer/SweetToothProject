// CART VARIABLE
let cart = [];

//-------------------------------------------------------------------------------------------

// ARRAY OF PRODUCTS
const products = [
  {
    id: 1,
    name: "Strawberry Cripsy Shortcake",
    price: 99.99,
    quantity: 0,
  },
  {
    id: 2,
    name: "Black Forest Cake",
    price: 99.99,
    quantity: 0,
  },
  {
    id: 3,
    name: "Strawberry Cheesecake",
    price: 99.99,
    quantity: 0,
  },
];

//-------------------------------------------------------------------------------------------

// SETUP PAGE
$(document).ready(function () {
  $(".cart1").show();
  $(".cart2").hide();
  $(".menu1").show();
  $(".menu2").hide();
  $("#cart-modal").hide();
  $("#menu-modal").hide();
  if ($(window).width() <= 1000) {
    $("#carousel-img-1").attr("src", "./assets/offer1-small.png");
    $("#carousel-img-2").attr("src", "./assets/offer2-small.png");
    $("#carousel-img-3").attr("src", "./assets/offer3-small.png");
  }
});

//-------------------------------------------------------------------------------------------

// CART AND MENU BUTTON EFFECTS
$(".st-cart-button").hover(() => {
  hoverButton("cart");
});

$(".st-cart-button").mouseleave(() => {
  mouseLeaveButton("cart");
});

$(".st-menu-button").hover(() => {
  hoverButton("menu");
});

$(".st-menu-button").mouseleave(() => {
  mouseLeaveButton("menu");
});

const hoverButton = (element) => {
  $("." + element + "1").hide();
  $("." + element + "2").show();
};

const mouseLeaveButton = (element) => {
  $("." + element + "1").show();
  $("." + element + "2").hide();
};

//-------------------------------------------------------------------------------------------

// OPEN MENU AND CART
$(".st-cart-button").click(() => {
  openCart();
});

$(".st-menu-button").click(() => {
  openMenu();
});

const openMenu = () => {
  $("#menu-modal").fadeIn();
  $("#menu").animate({ left: "0px" });
};

const openCart = () => {
  $("#cart-modal").fadeIn();
  $("#cart").animate({ right: "0px" });
  $("#cart").empty();
  $("#cart").append(
    '<div onclick="closeCart()" class="st-close-button">X</div>'
  );
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((product) => {
    $("#cart").append("<div>" + product.name + "</div>");
  });
};

//-------------------------------------------------------------------------------------------

// CLOSE MENU AND CART
$("#cart-modal").click(() => {
  closeCart();
});

$("#menu-modal").click(() => {
  closeMenu();
});

$("#close-menu").click(() => {
  closeMenu();
});

const closeMenu = () => {
  $("#menu-modal").fadeOut();
  $("#menu").animate({ left: "-300px" });
};

const closeCart = () => {
  $("#cart-modal").fadeOut();
  $("#cart").animate({ right: "-300px" });
};

//-------------------------------------------------------------------------------------------

// RESIZE CAROUSEL IMAGES
$(window).resize(() => {
  if ($(window).width() <= 1000) {
    $("#carousel-img-1").attr("src", "./assets/offer1-small.png");
    $("#carousel-img-2").attr("src", "./assets/offer2-small.png");
    $("#carousel-img-3").attr("src", "./assets/offer3-small.png");
    return;
  }
  $("#carousel-img-1").attr("src", "./assets/offer1.png");
  $("#carousel-img-2").attr("src", "./assets/offer2.png");
  $("#carousel-img-3").attr("src", "./assets/offer3.png");
});

//-------------------------------------------------------------------------------------------

// VALIDATE REVIEWS FORM
function validateForm() {
  let fName = document.getElementById("first").value;
  if (fName == "") {
    alert("First name must be provided.");
  } else {
    alert("Thank you for your input!");
  }
}

//-------------------------------------------------------------------------------------------

// FAQ PAGE ACCORDION
document.querySelectorAll(".accordion_button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("accordion_button--active");

    if (button.classList.contains("accordion_button--active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

//-------------------------------------------------------------------------------------------

// CART ADD AND REMOVE PRODUCT

function add(id, quantity) {
  let filteredProduct = products.filter((product) => product.id == id);
  let cart = JSON.parse(localStorage.getItem("cart"));
  let filteredCart = cart.filter((product) => product.id == id);
  if (filteredCart.length > 0) {
    filteredCart[0].quantity += quantity;
    cart = cart.filter((product) => product.id != id);
    cart.push(filteredCart[0]);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    filteredProduct[0].quantity += quantity;
    cart.push(filteredProduct[0]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  openCart();
}

function remove(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart = cart.filter((product) => product.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
}


//Products Page
// Get all the plus buttons
const plusBtns = document.querySelectorAll(".plus-btn");

// Loop through each plus button and add an event listener
plusBtns.forEach(function(plusBtn) {
  plusBtn.addEventListener("click", function() {
    // Get the input element
    const inputEl = this.parentNode.querySelector(".quantity-input");
    // Get the current value of the input element
    let inputValue = parseInt(inputEl.value);
    // Check if the value is less than 10
    if (inputValue<10){
      // Increase the value by 1 if less than 10
      inputValue++;
      // Set the new value of the input element
      inputEl.value = inputValue;
    }
  });
});

// Get all the minus buttons
const minusBtns = document.querySelectorAll(".minus-btn");

// Loop through each mius button and add an event listener
minusBtns.forEach(function(minusBtn) {
  minusBtn.addEventListener("click", function() {
    // Get the input element
    const inputEl = this.parentNode.querySelector(".quantity-input");
    // Get the current value of the input element
    let inputValue = parseInt(inputEl.value);
    // Check if the value is greater than 1
    if (inputValue>1){
      // Decrease the value by 1 if the value is greater than 1
      inputValue--;
      // Set the new value of the input element
      inputEl.value = inputValue;
    }
  });
});