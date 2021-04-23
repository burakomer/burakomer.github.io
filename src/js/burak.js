jQuery(function () {
  $(window).on("scroll", function () {
    var navbar = $("#navbar_top");
    var doc = $(document);
    if (window.scrollY > 0) {
      navbar.addClass("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = doc.find(".navbar").outerHeight(true);
      doc.find("body").css("padding-top", `${navbar_height}px`);
    } else {
      navbar.removeClass("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0px";
    }
    $("#site-navbar").collapse("hide");
  });

  $(".body-element:even").addClass("bg-light");
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
  if (win.width() < 750) {
    $(".carousel-caption").css("font-size", "14px");
    slider.removeClass("container p-5").addClass("container-fluid");
  } else {
    $(".carousel-caption").css("font-size", "19px");
    slider.removeClass("container-fluid").addClass("container p-5");
  }
}