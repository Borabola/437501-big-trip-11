import {generateStartDate} from "../mock/event";
import AbstractComponent from "./abstract-component.js";

export const startDate = generateStartDate();
const createTripDaysItemTemplate = (i) => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${startDate.day + i}</span>
        <time class="day__date" datetime="20${startDate.year}-${startDate.monthNumber}-${startDate.day + i}">${startDate.month} ${startDate.year}</time>
      </div>

      <ul class="trip-events__list"></ul>
    </li>`
  );
};

export default class TripDaysItem extends AbstractComponent {
  constructor(i) {
    super();
    this._i = i;
  }

  getTemplate() {
    return createTripDaysItemTemplate(this._i);
  }

  getTripDaysBlock() {
    return this.getElement().querySelector(`.trip-events__list`);
  }
}
