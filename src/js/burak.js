jQuery(function () {
  Init();

  $(window).on("scroll", onWindowScroll);
  $("a.nav-link").on("click", onNavLinkClick);
});

function Init() {
  // To position navigation scrolling correctly.
  $(".body-element").each(function () {
    var element = $(this);
    var paddingTop = parseInt(element.css("padding-top"), 10);
    element.css("scroll-margin-top", paddingTop);
  });

  // Theming
  $(".body-element:even").addClass("bg-light");
  $("h1").addClass("thick-header").addClass("pb-3");
  $("h2").addClass("thick-header");
  $("h3").addClass("thick-header");
  $("h4").addClass("thick-header");
  $("h5").addClass("thick-header");

  // Compensate for the navbar
  var firstBodyElement = $(".body-element:first");
  var currentPaddingTop = parseInt(firstBodyElement.css("padding-top"), 10);
  var newPadding = currentPaddingTop + $(".navbar").outerHeight(true);
  console.log({ newPadding });
  firstBodyElement.removeClass("pt-5");
  firstBodyElement.css("padding-top", `${newPadding}px`);

  responsiveUpdate();
  $(window).on("resize", responsiveUpdate);

  var selfPortrait = $(".self-portrait");
  selfPortrait.width(selfPortrait.width() * 0.2);

  $(".carousel-caption").addClass("rounded-rect-sm bg-semiopaque p-2");
}

function responsiveUpdate() {
  var carousel = $("div#projects").find("div:first");
  var aboutText = $(".about-text");
  var win = $(window);

  if (win.width() < 750) {
    // Update carousel-caption font size on phones to display correctly.
    $(".carousel-caption").css("font-size", "14px");
    carousel.removeClass("container p-5").addClass("container-fluid");
    // Update about-text padding to display correctly on phones.
    aboutText.removeClass("ps-5");
  } else {
    $(".carousel-caption").css("font-size", "19px");
    carousel.removeClass("container-fluid").addClass("container p-5");
    aboutText.addClass("ps-5");
  }
}

function onWindowScroll() {
  // Collapse navbar when scrolling.
  $("#site-navbar").collapse("hide");
}

function onNavLinkClick(event) {
  // Collapse navbar when clicking on a link.
  $("#site-navbar").collapse("hide");
  smoothScroll(event, this);
}

function smoothScroll(event, click) {
  var hash = click.hash !== "" ? click.hash : "#";
  var scrollTop = { scrollTop: click.hash !== "" ? $(hash).offset().top : 0 };
  console.log({ hash });
  event.preventDefault();
  $("html, body").animate(scrollTop, 300, function () {
    window.location.hash = hash;
  });
}
