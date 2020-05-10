import {DAY_COUNT, POINT_COUNT} from "../components/util";
// import {generateEvents} from "../mock/event";
import EventController from "./event-controller.js";
// import TripEventsItem from "../components/trip-events-item";
import TripDaysItem from "../components/trip-days-item";
// import EventEditComponent from "../components/event-edit.js";
import {render, RenderPosition} from "../utils/render.js";

/* const renderEvent = (eventListElement, event) => {
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
}; */

const renderTasks = (taskListElement, tasks) => {
  return tasks.map((task) => {
    const taskController = new TaskController(taskListElement);

    taskController.render(task);

    return taskController;
  });
};

/*const renderDaysEvents = (eventBlock, events) => {
  events.forEach((event) => {
    renderEvent(eventBlock, event);
  });
}; */

const renderDaysEvents = (eventBlock, events) => {
  return events.map((event) => {
    const eventController = new EventController(eventBlock);

    eventController.render(event);

    return eventController;
  });
};

export default class TripController {
  constructor(container) {
    this._container = container;
    this._events = [];
    this._showedEventControllers = [];
    // this._noEventComponent = new NoEventComponent;
  }
  render(events) {
    this._events = events;
    console.log(`this._events`);
    console.log(this._events);
    if (DAY_COUNT > 0) {
      for (let i = 0; i < DAY_COUNT; i++) {

        //  const events = generateEvents(POINT_COUNT);
        const TripDaysItemElement = new TripDaysItem(i);
        render(this._container, TripDaysItemElement, RenderPosition.BEFOREEND);
        const tripDaysBlock = TripDaysItemElement.getTripDaysBlock();
        //renderDaysEvents(tripDaysBlock, this._events.slice(0, POINT_COUNT));

        const newEvents = renderDaysEvents(tripDaysBlock, this._events.slice(i * POINT_COUNT, (i + 1) * POINT_COUNT));
        this._showedEventControllers = this._showedEventControllers.concat(newEvents);
        console.log(this._showedEventControllers);
      }
    }
  }
}
