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

$(".st-cart-button").click(() => {
  $("#cart-modal").fadeIn();
  $("#cart").animate({ right: "0px" });
});

$(".st-menu-button").click(() => {
  $("#menu-modal").fadeIn();
  $("#menu").animate({ left: "0px" });
});

$("#cart-modal").click(() => {
  $("#cart-modal").fadeOut();
  $("#cart").animate({ right: "-300px" });
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

//For reviews, create a way to calculate overall rating using given the ratings of reviews provided on the site
