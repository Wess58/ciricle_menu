$(document).ready(function() {

  toggle = document.querySelectorAll(".toggle")[0];
  nav = document.querySelectorAll("nav")[0];
  toggle_open_text = "Menu";
  toggle_close_text = "Close";

  toggle.addEventListener(
    "click",
    function() {
      nav.classList.toggle("open");

      if (nav.classList.contains("open")) {
        toggle.innerHTML = toggle_close_text;
      } else {
        toggle.innerHTML = toggle_open_text;
      }
    },
    false
  );

  setTimeout(function() {
    nav.classList.toggle("open");
  }, 800);
});

//ONSCROLL OPACITY
$(document).ready(function() {
  $(window).scroll(function() {
    $('.Intro').css("opacity", 1 - $(window).scrollTop() / 800)
  });
});

//BACK TO TOP BUTTON
