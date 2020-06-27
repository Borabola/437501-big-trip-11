import AbstractComponent from "./abstract-component.js";

const createDayListTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class DayList extends AbstractComponent {
  getTemplate() {
    return createDayListTemplate();
  }
}

