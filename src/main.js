import {DAY_COUNT, POINT_COUNT} from "./components/util";
import TripInfoComponent from "./components/trip-info";
import TripControlsComponent from "./components/trip-controls";
import TripCostComponent from "./components/trip-cost";
import TripEventsItem from "./components/trip-events-item";
import TripDaysItem from "./components/trip-days-item";
import TripSortComponent from "./components/trip-sort.js";
import TripFiltersComponent from "./components/trip-filters";
import {generateEvents} from "./mock/event";
import EventEditComponent from "./components/event-edit.js";
import {render, replace, RenderPosition} from "./utils/render"

const tripMainInfo = document.querySelector(`.trip-main`);
const tripControlBlock = document.querySelector(`.trip-main__trip-controls`);
const tripEventSection = document.querySelector(`.trip-events`);

const renderEvent = (eventListElement, event) => {
  const eventComponent = new TripEventsItem(event);
  const eventEditComponent = new EventEditComponent();
  const replaceEventToEdit = () => {
    replace(eventEditComponent, eventComponent);
  };

  const replaceEditToTask = () => {
    replace(eventComponent, eventEditComponent);
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };
  const editButton = eventComponent.getElement().querySelector(`.event__rollup-btn`);
  if (editButton) {
    editButton.addEventListener(`click`, () => {
      replaceEventToEdit();
      document.addEventListener(`keydown`, onEscKeyDown);
    });
  }

  const editForm = eventEditComponent.getElement().querySelector(`.event--edit`);
  if (editForm) {
    editForm.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
  }
  render(eventListElement, eventComponent, RenderPosition.BEFOREEND);
};

const renderDaysEvents = (eventBlock, events) => {
  events.forEach((event) => {
    renderEvent(eventBlock, event);
  });
};

render(tripMainInfo, new TripInfoComponent(), RenderPosition.AFTERBEGIN);

if (tripMainInfo.children[0]) {
  render(tripMainInfo.children[0], new TripCostComponent(), RenderPosition.BEFOREEND);
}
render(tripControlBlock.children[0], new TripControlsComponent(), RenderPosition.AFTER);
render(tripControlBlock, new TripFiltersComponent(), RenderPosition.BEFOREEND);
render(tripEventSection.children[0], new TripSortComponent(), RenderPosition.AFTER);

if (DAY_COUNT > 0) {
  for (let i = 0; i < DAY_COUNT; i++) {
    const events = generateEvents(POINT_COUNT);
    const TripDaysItemElement = new TripDaysItem(i);
    render(tripEventSection, TripDaysItemElement, RenderPosition.BEFOREEND);
    const tripDaysBlock = TripDaysItemElement.getElement().querySelector(`.trip-events__list`);
    renderDaysEvents(tripDaysBlock, events);
  }
}
