//DOM STRINGS OBJECT
const DOM = {
  timelineDate: document.querySelectorAll(".timeline__date"),
  timelineElem: document.querySelectorAll(".timeline__elem"),
  timelineBar: document.querySelector(".timeline__bar"),
};

//TIMELINE ELEM SET DIRECTION TO EVENT ITEMS (left or right oriented)

//getting direction from .timeline-elem
const __getDir = (timelineElem) => {
  if (timelineElem.classList.contains("timeline__elem--left")) {
    return "left";
  } else if (timelineElem.classList.contains("timeline__elem--right")) {
    return "right";
  }
};

const setDirEvent = () => {
  DOM.timelineElem.forEach((elem) => {
    const direction = __getDir(elem);

    const timelineEvent = elem.querySelector(".timeline__event");

    timelineEvent.classList.add(`timeline__event--${direction}`);
  });
};

