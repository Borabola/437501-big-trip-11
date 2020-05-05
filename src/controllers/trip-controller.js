import {DAY_COUNT, POINT_COUNT} from "../components/util";
import {generateEvents} from "../mock/event";
import TripEventsItem from "../components/trip-events-item";
import TripDaysItem from "../components/trip-days-item";
import EventEditComponent from "../components/event-edit.js";
import {render, replace, RenderPosition} from "../utils/render.js";

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

  eventComponent.setEditButtonClickHandler(() => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  eventEditComponent.setSubmitHandler((evt) => {
    evt.preventDefault();
    replaceEditToTask();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(eventListElement, eventComponent, RenderPosition.BEFOREEND);
};

const renderDaysEvents = (eventBlock, events) => {
  events.forEach((event) => {
    renderEvent(eventBlock, event);
  });
};


export default class TripController {
  constructor(container) {
    this._container = container;
  }
  render() {
    if (DAY_COUNT > 0) {
      for (let i = 0; i < DAY_COUNT; i++) {
        const events = generateEvents(POINT_COUNT);
        const TripDaysItemElement = new TripDaysItem(i);
        render(this._container, TripDaysItemElement, RenderPosition.BEFOREEND);
        const tripDaysBlock = TripDaysItemElement.getTripDaysBlock();
        renderDaysEvents(tripDaysBlock, events);
      }
    }
  }
}
