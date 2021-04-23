jQuery(function () {
  $(window).on("scroll", function () {
    if (window.scrollY > 0) {
      $("#navbar_top").addClass("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      $("#navbar_top").removeClass("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
    // $("#site-navbar").collapse();
  });

  $("div.body-element:even").addClass("bg-light");
  $("h1").addClass("thick-header").addClass("pb-3");
  $("h2").addClass("thick-header");
  $("h3").addClass("thick-header");
  $("h4").addClass("thick-header");
  $("h5").addClass("thick-header");

  responsiveUpdate();
  $(window).on("resize", responsiveUpdate);
});

function responsiveUpdate() {
  var slider = $("div#projects").find("div:first");
  var win = $(this); //this = window
  if (win.width() < 768) {
    $("body").css("font-size", "16px");
    slider.removeClass("container p-5").addClass("container-fluid");
  } else {
    $("body").css("font-size", "19px");
    slider.removeClass("container-fluid").addClass("container p-5");
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 0) {
//       document.getElementById("navbar_top").classList.add("fixed-top");
//       // add padding top to show content behind navbar
//       navbar_height = document.querySelector(".navbar").offsetHeight;
//       document.body.style.paddingTop = navbar_height + "px";
//     } else {
//       document.getElementById("navbar_top").classList.remove("fixed-top");
//       // remove padding top from body
//       document.body.style.paddingTop = "0";
//     }
//   });
// });
