import {DAY_COUNT, POINT_COUNT} from "../components/util";
import EventController from "./event-controller.js";
import TripDaysItem from "../components/trip-days-item";
import {render, RenderPosition} from "../utils/render.js";


const renderDaysEvents = (eventBlock, events, onDataChange, onViewChange) => {
  return events.map((event) => {
    const eventController = new EventController(eventBlock, onDataChange, onViewChange);

    eventController.render(event);

    return eventController;
  });
};

export default class TripController {
  constructor(container) {
    this._container = container;
    this._events = [];
    this._showedEventControllers = [];
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    // this._noEventComponent = new NoEventComponent;
  }
  render(events) {
    this._events = events;
    if (DAY_COUNT > 0) {
      for (let i = 0; i < DAY_COUNT; i++) {
        const TripDaysItemElement = new TripDaysItem(i);
        render(this._container, TripDaysItemElement, RenderPosition.BEFOREEND);
        const tripDaysBlock = TripDaysItemElement.getTripDaysBlock();
        const newEvents = renderDaysEvents(tripDaysBlock, this._events.slice(i * POINT_COUNT, (i + 1) * POINT_COUNT), this._onDataChange, this._onViewChange);
        this._showedEventControllers = this._showedEventControllers.concat(newEvents);
      }
    }
  }

  _onDataChange(oldData, newData) {
    const index = this._events.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._events = [].concat(this._events.slice(0, index), newData, this._events.slice(index + 1));

    this._showedEventControllers.render(this._events[index]);
  }

  _onViewChange() {
    this._showedEventControllers.forEach((it) => it.setDefaultView());
  }
}
