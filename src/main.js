import {DAY_COUNT} from "./components/util";
import {createTripInfoTemplate} from "./components/trip-info";
import {createTripControlsTemplate} from "./components/trip-controls";
import {createTripCostTemplate} from "./components/trip-cost";
import {createDayListTemplate} from "./components/day-list.js";
import {createTripSortTemplate} from "./components/trip-sort.js";
import {createTripFiltersTemplate} from "./components/trip-filters";
import {createEventEditTemplate} from "./components/event-edit.js";

const tripMainInfo = document.querySelector(`.trip-main`);
const tripControlBlock = document.querySelector(`.trip-main__trip-controls`);
const tripEventSection = document.querySelector(`.trip-events`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(tripMainInfo, createTripInfoTemplate(), `afterBegin`);

if (tripMainInfo.children[0]) {
  render(tripMainInfo.children[0], createTripCostTemplate(), `beforeEnd`);
}
render(tripControlBlock.children[0], createTripControlsTemplate(), `afterEnd`);
render(tripControlBlock, createTripFiltersTemplate(), `beforeend`);
render(tripEventSection.children[0], createTripSortTemplate(), `afterEnd`);
render(tripEventSection.children[1], createEventEditTemplate(), `afterEnd`);

if (DAY_COUNT > 0) {
  render(tripEventSection, createDayListTemplate(), `beforeEnd`);
}
