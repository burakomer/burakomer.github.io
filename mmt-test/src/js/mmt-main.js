const ScreenSize = { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 };
Object.freeze(ScreenSize);

var scrolledTop = true;

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

jQuery(function () {
  fetchNews();

  responsiveUpdate();
  $(window).on("resize", responsiveUpdate);
  $(window).on("scroll", onScroll);
});

function responsiveUpdate() {
  var deviceSize = ScreenSize[getBootstrapDeviceSize()];

  const navbarBrand = $(".navbar-brand");
  if (deviceSize <= ScreenSize.sm) {
    // Add padding to navbar-brand
    navbarBrand.css("padding-left", "12px");
  } else {
    // Remove padding from navbar-brand
    navbarBrand.css("padding-left", "0px");
  }

  const motto = $("h1#motto"); // Alter text shifting
  const newsCards = $("#news .card-element"); // Change card column layout
  if (deviceSize <= ScreenSize.md) {
    motto.css("left", "5%");
    newsCards.removeClass("col").addClass("col-sm-6");
  } else {
    motto.css("left", "10%");
    newsCards.removeClass("col-sm-6").addClass("col");
  }
}

function onScroll() {
  var scroll = $(window).scrollTop();

  if (scroll <= 10 && scrolledTop == false) {
    $("div.go-top-button").animate({ opacity: 0 }, 0.2);
    scrolledTop = true;
  } else if (scroll > 10 && scrolledTop == true) {
    $("div.go-top-button").animate({ opacity: 1 }, 0.2);
    scrolledTop = false;
  }
}

function fetchNews() {
  const news = [
    {
      title: "Bright",
      content: `The spectacle
      before us was indeed sublime. The sky was cloudless and of a
      deep dark blue. The spectacle
      before us was indeed sublime.`,
      link: "#",
    },
    {
      title: "Shine",
      content: `The sky was cloudless and of a
      deep dark blue. The spectacle
      before us was indeed sublime.`,
      link: "#",
    },
    {
      title: "Sun",
      content: `The sky was cloudless and of a
      deep dark blue. The spectacle
      before us was indeed sublime. The sky was cloudless and of a
      deep dark blue. The spectacle
      before us was indeed sublime.`,
      link: "#",
    },
    {
      title: "Diamond",
      content: `The sky was cloudless and of a
      deep dark blue. The spectacle
      before us was indeed sublime. `,
      link: "#",
    },
  ];

  var newsHtml = "";

  for (let i = 0; i < news.length; i++) {
    const item = news[i];

    newsHtml += `
    <div class="card-element g-4">
      <div class="card-contents">
        <ul>
          <li>
            <h1>${item.title}</h1>
          </li>
          <li>
            <p>${item.content}</p>
          </li>
        </ul>
        <div class="pt-5"><a href="${item.link}" class="pill-button"><span>Devamını oku...</span></a></div>
      </div>
    </div>
    `;
  }

  $("#news #news-contents").append(newsHtml);
}

function getBootstrapDeviceSize() {
  return $("#device-size-detector").find("div:visible").first().attr("id");
}
