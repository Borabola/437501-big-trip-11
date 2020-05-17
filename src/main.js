import {DAY_COUNT, POINT_COUNT} from "./components/util.js";
import {generateEvents} from "./mock/event";
import TripInfoComponent from "./components/trip-info";
import TripCostComponent from "./components/trip-cost";
import TripControlsComponent from "./components/trip-controls";
import TripSortComponent from "./components/trip-sort.js";
import TripFiltersComponent from "./components/trip-filters";
import TripController from "./controllers/trip-controller";
import {render, RenderPosition} from "./utils/render.js";
import EventsModel from "./models/points";

const tripMainInfo = document.querySelector(`.trip-main`);
const tripControlBlock = document.querySelector(`.trip-main__trip-controls`);
const tripEventSection = document.querySelector(`.trip-events`);

render(tripMainInfo, new TripInfoComponent(), RenderPosition.AFTERBEGIN);

if (tripMainInfo.children[0]) {
  render(tripMainInfo.children[0], new TripCostComponent(), RenderPosition.BEFOREEND);
}
render(tripControlBlock.children[0], new TripControlsComponent(), RenderPosition.AFTER);
render(tripControlBlock, new TripFiltersComponent(), RenderPosition.BEFOREEND);
render(tripEventSection.children[0], new TripSortComponent(), RenderPosition.AFTER);

const events = generateEvents(POINT_COUNT * DAY_COUNT);
const eventsModel = new EventsModel();
eventsModel.setEvents(events);

const tripController = new TripController(tripEventSection, eventsModel);
tripController.render();
