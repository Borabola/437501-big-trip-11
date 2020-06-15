
import {isOneDay} from "./common.js";
import {FilterType} from "../const.js";

export const getFavoriteEvents = (events) => {
  return events.filter((event) => event.isFavorite);
};

export const getFutureEvents = (events, date) => {
  return events.filter((event) => event.timeEvent.start.getTime() > date.getTime());
};

export const getPastEvents = (events, date) => {
  return events.filter((event) => event.timeEvent.start.getTime() < date.getTime());
};

export const getEventsInOneDay = (events, date) => {
  return events.filter((event) => isOneDay(event.timeEvent.start, date));
};

export const getEventsByFilter = (events, filterType) => {
  const nowDate = new Date();
  switch (filterType.toUpperCase()) {
    case FilterType.EVERYTHING:
      return events;

    case FilterType.FUTURE:
      return getFutureEvents(events, nowDate);

    case FilterType.PAST:
      return getPastEvents(events, nowDate);
  }

  return events;
};
