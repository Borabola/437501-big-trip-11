import {DAY_COUNT} from "./util.js";
import {POINT_COUNT} from "./util.js";
import {generateEvents} from "../mock/event";
import {createTripEventsItemTemplate} from "./trip-events-item";
import {createTripDaysItemTemplate} from "./trip-days-item.js";

export const createDayListTemplate = () => {
  let dayContent = ``;

  for (let i = 0; i < DAY_COUNT; i++) {
    const events = generateEvents(POINT_COUNT);
    let pointsContent = ``;
    for (let j = 0; j < POINT_COUNT; j++) {
      pointsContent += createTripEventsItemTemplate(events[j]);
    }
    dayContent += createTripDaysItemTemplate(pointsContent, i);
  }

  return (
    `<ul class="trip-days">${dayContent}</ul>`
  );
};
