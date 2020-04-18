import {generateStartDate} from "../mock/event";

const startDate = generateStartDate();
console.log(startDate);
export const createTripDaysItemTemplate = (tripEventsList, i) => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${startDate.day + i}</span>
        <time class="day__date" datetime="20${startDate.year}-${startDate.monthNumber}-${startDate.day + i}">${startDate.month} ${startDate.year}</time>
      </div>

      <ul class="trip-events__list">${tripEventsList}</ul>
    </li>
`
  );
};
