window.onload = function() {
  eventClickNavigationHeader(); // меню навигации header с переключеним
  headerNavigationScroll(); // переход по якорям на заданную позицию

  /** Активация экрноп по нажатию на кнопку телефона,расположенную внизу */
  eventClickVerticalPhone(); //Slider. Активация вериткального телефона
  eventClickHorizontalPhone(); // Slider. Активация горизонтального телефона

  sliderBrowse(); //Slider. Переключение слайдов

  eventClickNavigationPortfolio(); //
  eventClickPicturesPortfolio(); // рамка при нажатии на картинку блок portfolio

  formMessage(); //GET A QUOTE
};

/** HEADER*/

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

/** выкл/вкл вертикальный телефон */
const eventClickVerticalPhone = () => {
  let status = true;
  let verticalBack = document.getElementById("vertical-back-id");

  document.getElementById("vertical-phone-button").onclick = () => {
    if (status) {
      verticalBack.style.backgroundImage = "none";
      status = false;
    } else {
      verticalBack.style.backgroundImage =
        'url("assets/singolo1/slider/back phone 1.png")';
      status = true;
    }
  };
};

/** выкл/вкл горизотальный телефон */
const eventClickHorizontalPhone = () => {
  let status = true;
  let horizontalBack = document.getElementById("horizontal-back-id");

  document.getElementById("horizontal-phone-button").onclick = () => {
    if (status) {
      horizontalBack.style.backgroundImage = "none";
      status = false;
    } else {
      horizontalBack.style.backgroundImage =
        'url("assets/singolo1/slider/back phone 2.png")';
      status = true;
    }
  };
};

/**Переключение слайдов*/
const sliderBrowse = () => {
  let leftButton = document.getElementById("left-button");
  let rightButton = document.getElementById("right-button");
  let sliderBlock = document.getElementById("slider-block");
  let sliderOne = document.getElementById("slider-one");
  let sliderTwo = document.getElementById("slider-two");
  let numberSrider = 0;

  rightButton.onclick = () => {
    numberSrider++;
    if (numberSrider > 1) numberSrider = 0;
    switch (numberSrider) {
      case 0:
        sliderBlock.style.background = "#f06c64";
        sliderOne.style.display = "block";
        sliderTwo.style.display = "none";
        break;
      case 1:
        sliderBlock.style.background = "#648bf0";
        sliderOne.style.display = "none";
        sliderTwo.style.display = "block";
        sliderTwo.style.backgroundImage =
          'url("assets/singolo1/slider/Slide-2.png")';
        break;
    }
  };

  leftButton.onclick = () => {
    numberSrider--;
    if (numberSrider < 0) numberSrider = 1;
    switch (numberSrider) {
      case 0:
        sliderBlock.style.background = "#f06c64";
        sliderOne.style.display = "block";
        sliderTwo.style.display = "none";
        break;
      case 1:
        sliderBlock.style.background = "#648bf0";
        sliderOne.style.display = "none";
        sliderTwo.style.display = "block";
        sliderTwo.style.backgroundImage =
          'url("assets/singolo1/slider/Slide-2.png")';
        break;
    }
  };
};

/**PORTFOLIO*/
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
    getNewPicturePosition();
  });
};

const getNewPicturePosition = () => {};

/*обработчик событий: нажатие блока картинок в portfolio*/
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

/**GET A QUOTE */

/**окно поверх макета c информацией */
const formMessage = () => {
  let form = document.getElementById("form");
  let messageBlock = document.getElementById("message-block");

  let subjectMessage = document.getElementById("subject-message");
  let textMessage = document.getElementById("text-message");

  /**событие - отправка формы */
  form.addEventListener("submit", event => {
    event.preventDefault();

    let inputSubject = document.querySelector(".form-subject").value;
    let inputText = document.querySelector(".form-text").value;

    subjectMessage.append(getSubjectMessage(inputSubject));
    textMessage.append(getDescriptionMessage(inputText));

    messageBlock.classList.remove("hidden");
  });

  /**закрыть Информационное окно */
  document.getElementById("hide-message").onclick = () => {
    messageBlock.classList.add("hidden");
    subjectMessage.innerHTML = "";
    textMessage.innerHTML = "";
  };
};
/**данные с поля subject */
const getSubjectMessage = (submitMessage = "Without subject") => {
  if (submitMessage.length == 0) {
    return (innerHTML = "Without subject");
  } else {
    return (innerHTML = "Subject: " + submitMessage);
  }
};
/** данные с поля description*/
const getDescriptionMessage = (descriptionMessage = "Without description") => {
  if (descriptionMessage.length == 0) {
    return (innerHTML = "Without description");
  } else {
    return (innerHTML = "Description: " + descriptionMessage);
  }
};
