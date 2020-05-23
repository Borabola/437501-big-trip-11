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
  constructor(container, eventsModel) {
    this._container = container;
    this._eventsModel = eventsModel;
    this._showedEventControllers = [];
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._eventsModel.setFilterChangeHandler(this._onFilterChange);
  }
  render() {
    let events = this._eventsModel.getEvents();

    let eventsForDay = events.filter((event) => event.timeEvent.start.getDate() === events[0].timeEvent.start.getDate());
    let eventsToRender = events;
    let eventsShown = 0;

    while (eventsShown < events.length) {
      eventsShown = eventsShown + eventsForDay.length;
      const TripDaysItemElement = new TripDaysItem(eventsToRender[0]);
      render(this._container, TripDaysItemElement, RenderPosition.BEFOREEND);
      const tripDaysBlock = TripDaysItemElement.getTripDaysBlock();
      const newEvents = renderDaysEvents(tripDaysBlock, eventsForDay, this._onDataChange, this._onViewChange);
      this._showedEventControllers = this._showedEventControllers.concat(newEvents);
      eventsToRender = eventsToRender.slice(eventsForDay.length);
      eventsForDay = eventsToRender.filter((event) => event.timeEvent.start.getDate() === eventsToRender[0].timeEvent.start.getDate());
    }
  }

  _renderEvents(events) {
    const eventListElement = this._eventsComponent.getElement();

    const newEvents = renderDaysEvents(eventListElement, events, this._onDataChange, this._onViewChange);
    this._showedEventControllers = this._showedEventControllers.concat(newEvents);
  }

  _removeEvents() {
    this._showedEventControllers.forEach((eventController) => eventController.destroy());
    this._showedEventControllers = [];
  }

  _updateEvents() {
    this._removeEvents();
    this._renderEvents(this._eventsModel.getEvents());
  }

  _onDataChange(eventController, oldData, newData) {
    const isSuccess = this._eventsModel.updateEvent(oldData.id, newData);

    if (isSuccess) {
      eventController.render(newData);
    }
  }

  _onViewChange() {
    this._showedEventControllers.forEach((it) => it.setDefaultView());
  }

  _onFilterChange() {
    this._updateEvents();
  }
}
