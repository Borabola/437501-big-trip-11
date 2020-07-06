const DAY_COUNT = 2;
const POINT_COUNT = 5;

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const restoreNewEventBtn = () => {
  const newEventBtn = document.querySelector(`.trip-main__event-add-btn`);
  newEventBtn.disabled = false;
};

export {DAY_COUNT, POINT_COUNT, createElement, restoreNewEventBtn};
