import {DAY_COUNT} from "./util.js";
import {POINT_COUNT} from "./util.js";
import {createTripEventsItemTemplate} from "./trip-events-item";
import {createTripDaysItemTemplate} from "./trip-days-item.js";

export const createDayListTemplate = () => {
  let dayContent = ``;

  for (let i = 0; i < DAY_COUNT; i++) {
    let pointsContent = ``;
    for (let j = 0; j < POINT_COUNT; j++) {
      pointsContent += createTripEventsItemTemplate();
    }
    dayContent += createTripDaysItemTemplate(pointsContent);
  }

  return (
    `<ul class="trip-days">${dayContent}</ul>`
  );
};
