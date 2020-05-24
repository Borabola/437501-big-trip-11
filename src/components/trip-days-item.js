// import {generateStartDate} from "../mock/event";
import AbstractComponent from "./abstract-component.js";
import {getMonthName} from "../utils/common";

// export const startDate = generateStartDate();
const createTripDaysItemTemplate = (event) => {
  const month = getMonthName(event.timeEvent.start);
  const year = event.timeEvent.start.getFullYear() - 2000;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${event.timeEvent.start.getDate()}</span>
        <time class="day__date" datetime="${event.timeEvent.start.getFullYear()}-${event.timeEvent.start.getMonth()}-${event.timeEvent.start.getDate()}">${month} ${year}</time>
      </div>

      <ul class="trip-events__list"></ul>
    </li>`
  );
};

export default class TripDaysItem extends AbstractComponent {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    return createTripDaysItemTemplate(this._event);
  }

  getTripDaysBlock() {
    return this.getElement().querySelector(`.trip-events__list`);
  }
}
