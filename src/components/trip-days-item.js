import {generateStartDate} from "../mock/event";
import {createElement} from "./util";

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

export default class TripDaysItem {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  getTemplate() {
    return createTripDaysItemTemplate(this._i);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
