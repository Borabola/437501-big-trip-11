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
  }
  render() {
    const events = this._eventsModel.getEvents();
    if (DAY_COUNT > 0) {
      for (let i = 0; i < DAY_COUNT; i++) {
        const TripDaysItemElement = new TripDaysItem(i);
        render(this._container, TripDaysItemElement, RenderPosition.BEFOREEND);
        const tripDaysBlock = TripDaysItemElement.getTripDaysBlock();
        // const newEvents = renderDaysEvents(tripDaysBlock, events.slice(i * POINT_COUNT, (i + 1) * POINT_COUNT), this._onDataChange, this._onViewChange);
        const newEvents = renderDaysEvents(tripDaysBlock, events, this._onDataChange, this._onViewChange);
        this._showedEventControllers = this._showedEventControllers.concat(newEvents);
      }
    }
  }

  _onDataChange(eventController, oldData, newData) {
    const isSuccess = this._eventModel.updateTask(oldData.id, newData);

    if (isSuccess) {
      eventController.render(newData);
    }
  }

  _onViewChange() {


    this._showedEventControllers.forEach((it) => it.setDefaultView());
  }
}
