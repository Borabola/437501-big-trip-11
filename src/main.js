import {DAY_COUNT, POINT_COUNT, RenderPosition, render} from "./components/util";
import TripInfoComponent from "./components/trip-info";
import TripControlsComponent from "./components/trip-controls";
import TripCostComponent from "./components/trip-cost";
import TripEventsItem from "./components/trip-events-item";
import TripDaysItem from "./components/trip-days-item";
import TripSortComponent from "./components/trip-sort.js";
import TripFiltersComponent from "./components/trip-filters";
import {generateEvents} from "./mock/event";
import EventEditComponent from "./components/event-edit.js";

const tripMainInfo = document.querySelector(`.trip-main`);
const tripControlBlock = document.querySelector(`.trip-main__trip-controls`);
const tripEventSection = document.querySelector(`.trip-events`);

const renderEvent = (eventListElement, event) => {
  const eventComponent = new TripEventsItem(event);
  const eventEditComponent = new EventEditComponent();
  const replaceEventToEdit = () => {
    eventListElement.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
  };

  const replaceEditToTask = () => {
    eventListElement.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
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
  render(eventListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderDaysEvents = (eventBlock, events) => {
  events.forEach((event) => {
    renderEvent(eventBlock, event);
  });
};

render(tripMainInfo, new TripInfoComponent().getElement(), RenderPosition.AFTERBEGIN);

if (tripMainInfo.children[0]) {
  render(tripMainInfo.children[0], new TripCostComponent().getElement(), RenderPosition.BEFOREEND);
}
render(tripControlBlock.children[0], new TripControlsComponent().getElement(), RenderPosition.AFTER);
render(tripControlBlock, new TripFiltersComponent().getElement(), RenderPosition.BEFOREEND);
render(tripEventSection.children[0], new TripSortComponent().getElement(), RenderPosition.AFTER);

if (DAY_COUNT > 0) {
  for (let i = 0; i < DAY_COUNT; i++) {
    const events = generateEvents(POINT_COUNT);
    const TripDaysItemElement = new TripDaysItem(i).getElement();
    render(tripEventSection, TripDaysItemElement, RenderPosition.BEFOREEND);
    const tripDaysBlock = TripDaysItemElement.querySelector(`.trip-events__list`);
    renderDaysEvents(tripDaysBlock, events);
  }
}
