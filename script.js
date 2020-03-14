window.onload = function() {
  eventClickNavigationHeader(); //
  eventClickNavigationPortfolio(); //
};

/*обработчик событий блока nav в header*/
const eventClickNavigationHeader = () => {
  let navigationHeader = document.getElementById("navigation-list-header");

  navigationHeader.addEventListener("click", event => {
    navigationHeader
      .querySelectorAll("a")
      .forEach(el => el.classList.remove("active-header"));
    event.target.classList.add("active-header");
  });
};

/*обработчик событий блока nav в portfolio*/
const eventClickNavigationPortfolio = () => {
  let navigationPortfolio = document.getElementById(
    "navigation-list-portfolio"
  );

  navigationPortfolio.addEventListener("click", event => {
    navigationPortfolio
      .querySelectorAll("li")
      .forEach(el => el.classList.remove("active-portfolio"));
    event.target.classList.add("active-portfolio");
  });
};
