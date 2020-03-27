window.onload = function() {
  eventClickNavigationHeader(); // меню навигации header с переключеним
  headerNavigationScroll(); // переход по якорям на заданную позицию

  /** Активация экрноп по нажатию на кнопку телефона,расположенную внизу */
  eventClickVerticalPhone(); //Slider. Активация вериткального телефона
  eventClickHorizontalPhone(); // Slider. Активация горизонтального телефона

  sliderBrowse(); //Slider. Переключение слайдов

  eventClickNavigationPortfolio(); // меню навигации portfolio
  eventClickPicturesPortfolio(); // рамка при нажатии на картинку блок portfolio

  formMessage(); //GET A QUOTE. отображение текста с формы

  showMenu();
  hideMenu();
  eventClickMobileMenu(); //мобильное меню
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
  let anchors = document.querySelectorAll("a.nav-link, .menu-link");
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
  let currentItem = 0;
  let backColor = ["#f06c64", "#648BF0"];
  let items = document.querySelectorAll(".item");
  let isEnable = true;

  rightButton.onclick = () => {
    if (isEnable) {
      nextItem(currentItem);
      document.getElementById("slider-block").style.backgroundColor =
        backColor[currentItem];
    }
  };

  leftButton.onclick = () => {
    if (isEnable) {
      previousItem(currentItem);
      document.getElementById("slider-block").style.backgroundColor =
        backColor[currentItem];
    }
  };

  previousItem = n => {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
  };

  nextItem = n => {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
  };

  hideItem = direction => {
    isEnable = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener("animationend", function() {
      this.classList.remove("active-item", direction);
    });
  };

  showItem = direction => {
    items[currentItem].classList.add("next", direction);
    items[currentItem].addEventListener("animationend", function() {
      this.classList.add("active-item");
      this.classList.remove("next", direction);
      isEnable = true;
    });
  };

  changeCurrentItem = n => {
    currentItem = (n + items.length) % items.length;
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
    if (event.target.tagName == "LI") {
      event.target.classList.add("active-portfolio");
      getNewPositionPicture(); //Portfolio. Переключение картинок
    }
  });
};

const getNewPositionPicture = () => {
  let pictureList = [...document.querySelectorAll(".picture")];

  let pictureListRandom = pictureList.sort(() => {
    return Math.random() - 0.5;
  });

  pictureList.forEach(el => {
    el.remove();
  });

  for (let i = 0; i < pictureListRandom.length; i++) {
    //добавляем новое расположение
    document.getElementById("colums-pictures").append(pictureListRandom[i]);
  }
};

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
    form.reset();
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

const showMenu = () => {
  let checkBox = document.getElementById("menu");
  let menu = document.querySelector(".menu-container");
  let menuBack = document.querySelector(".menu-back");

  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      menu.style.left = 0;
      menuBack.style.display = "block";
    } else {
      menu.style.left = "-100%";
      menuBack.style.display = "none";
    }
  });
};

const eventClickMobileMenu = () => {
  let menuLink = document.querySelectorAll(".menu-link");
  menuLink.forEach(element => {
    element.addEventListener("click", event => {
      menuLink.forEach(elem => {
        elem.classList.remove("active-header");
      });
      event.target.classList.add("active-header");
      document.getElementById("menu").checked = false;
      document.querySelector(".menu-container").style.left = "-100%";
      document.querySelector(".menu-back").style.display = "none";
    });
  });
};

const hideMenu = () => {
  let menuBack = document.querySelector(".menu-back");

  menuBack.addEventListener("click", () => {
    document.getElementById("menu").checked = false;
    document.querySelector(".menu-container").style.left = "-100%";
    document.querySelector(".menu-back").style.display = "none";
  });
};
