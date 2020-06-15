import {getEventsByFilter} from "../utils/filter.js";
import {FilterType} from "../const.js";


export default class Events {
  constructor() {
    this._events = [];
    this._activeFilterType = FilterType.EVERYTHING;

    this._dataChangeHandlers = [];
    this._filterChangeHandlers = [];
  }

  getEvents() {
    console.log(`this._activeFilterType from getEvents`);
    console.log(this._activeFilterType);
    const eventsNormalize = this._events.sort((a, b) => a.timeEvent.start - b.timeEvent.start);
    return getEventsByFilter(eventsNormalize, this._activeFilterType);
  }

  getEventsAll() {

    const filteredEvents = getEventsByFilter(this._events, this._activeFilterType);
    console.log(`this._activeFilterType from getEventsAll`);
    console.log(filteredEvents);
    if (filteredEvents.length > 1) {
      return filteredEvents.sort((a, b) => a.timeEvent.start - b.timeEvent.start);
    } else {
      return filteredEvents;
    }
  }

  setEvents(events) {
    this._events = Array.from(events);
    this._callHandlers(this._dataChangeHandlers);
  }

  setFilter(filterType) {
    this._activeFilterType = filterType;
    this._callHandlers(this._filterChangeHandlers);
  }

  removeEvent(id) {
    const index = this._events.findIndex((it) => it.id === id);

    if (index === -1) {
      return false;
    }

    this._events = [].concat(this._events.slice(0, index), this._events.slice(index + 1));

    this._callHandlers(this._dataChangeHandlers);

    return true;
  }

  updateEvent(id, event) {
    const index = this._events.findIndex((it) => it.id === id);

    if (index === -1) {
      return false;
    }

    this._events = [].concat(this._events.slice(0, index), event, this._events.slice(index + 1));

    this._callHandlers(this._dataChangeHandlers);

    return true;
  }

  addEvent(event) {
    this._events = [].concat(event, this._events);
    this._callHandlers(this._dataChangeHandlers);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }


  setDataChangeHandler(handler) {
    this._dataChangeHandlers.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }
}
