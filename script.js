window.onload = function() {
  eventClickNavigationHeader(); //
  eventClickNavigationPortfolio(); //
  eventClickPicturesPortfolio(); //
  headerNavigationScroll();
};

/*обработчик событий нажатия блока nav в header*/
const eventClickNavigationHeader = () => {
  let navigationHeader = document.getElementById("navigation-list-header");

  navigationHeader.addEventListener("click", event => {
    navigationHeader.querySelectorAll("a").forEach(el => {
      el.classList.remove("active-header");
    });
    if (event.target.tagName == "A")
      event.target.classList.add("active-header");
  });
};

/*обработчик событий нажатия блока pitures в portfolio*/
const eventClickPicturesPortfolio = () => {
  let picturePortfolio = document.getElementById("colums-pictures");

  picturePortfolio.addEventListener("click", event => {
    picturePortfolio
      .querySelectorAll("img")
      .forEach(el => el.classList.remove("picture-click"));
    if (event.target.tagName == "IMG")
      event.target.classList.add("picture-click");
  });
};

const eventClickNavigationPortfolio = () => {
  let navigationPortfolio = document.getElementById(
    "navigation-list-portfolio"
  );

  navigationPortfolio.addEventListener("click", event => {
    navigationPortfolio
      .querySelectorAll("li")
      .forEach(el => el.classList.remove("active-portfolio"));
    if (event.target.tagName == "LI")
      event.target.classList.add("active-portfolio");
  });
};

/*Плавный скролл по якорям*/
const headerNavigationScroll = () => {
  let anchors = document.querySelectorAll("a.nav-link");

  for (let anchor of anchors) {
    anchor.addEventListener("click", e => {
      e.preventDefault();

      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
};
