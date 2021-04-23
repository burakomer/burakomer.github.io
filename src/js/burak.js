jQuery(function () {
  $(window).on("scroll", function () {
    var navbar = $("#navbar_top");
    var doc = $(document);
    if (window.scrollY > 0) {
      navbar.addClass("fixed-top");
      // add padding top to show content behind navbar
      navbarHeight = doc.find(".navbar").outerHeight(true);
      doc.find("body").css("padding-top", `${navbarHeight}px`);
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

  var selfPortrait = $(".self-portrait");
  selfPortrait.width(selfPortrait.width() * 0.4);

  $(".carousel-caption").addClass("rounded-rect-sm bg-semiopaque p-2");
});

function responsiveUpdate() {
  var slider = $("div#projects").find("div:first");
  var aboutText = $(".about-text");
  var win = $(this); //this = window
  if (win.width() < 750) {
    $(".carousel-caption").css("font-size", "14px");
    slider.removeClass("container p-5").addClass("container-fluid");
    aboutText.removeClass("ps-5");
  } else {
    $(".carousel-caption").css("font-size", "19px");
    slider.removeClass("container-fluid").addClass("container p-5");
    aboutText.addClass("ps-5");
  }
}
