// import {generateStartDate} from "../mock/event";
import AbstractComponent from "./abstract-component.js";
import {getMonthName} from "../utils/common";

// export const startDate = generateStartDate();
const createTripDaysItemTemplate = (event) => {
  console.log(`event.timeEvent.start`);
  console.log(event.timeEvent.start);
  console.log(event.timeEvent.start.getDay());
  const month = getMonthName(event.timeEvent.start);
  const year = event.timeEvent.start.getFullYear() - 2000;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${event.timeEvent.start.getDay()}</span>
        <time class="day__date" datetime="${event.timeEvent.start.getFullYear()}-${event.timeEvent.start.getMonth()}-${event.timeEvent.start.getDay()}">${month} ${year}</time>
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
