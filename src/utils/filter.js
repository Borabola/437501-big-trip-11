
import {isOneDay} from "./common.js";
import {FilterType} from "../const.js";

export const getFavoriteEvents = (events) => {
  return events.filter((event) => event.isFavorite);
};

export const getFutureEvents = (events) => {
  return events.filter((event) => event.isFavorite);
};

export const getEventsInOneDay = (events, date) => {
  return events.filter((event) => isOneDay(event.timeEvent.start, date));
};

export const getEventsByFilter = (events, filterType) => {
  // const nowDate = new Date();

  switch (filterType) {
    case FilterType.EVERYTHING:
      return events;

    case FilterType.FUTURE:
      // return getOverdueTasks(getNotArchiveTasks(tasks), nowDate);
      return events;
    case FilterType.PAST:
      return events;
  }

  return events;
};
