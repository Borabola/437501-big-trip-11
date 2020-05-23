const DAY_COUNT = 2;
const POINT_COUNT = 5;

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export {DAY_COUNT, POINT_COUNT, createElement};
