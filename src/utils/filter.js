
import {isOneDay, isFutureDay, isPastDay} from "./common.js";
import {FilterType} from "../const.js";

export const getFavoriteEvents = (events) => {
  return events.filter((event) => event.isFavorite);
};

export const getFutureEvents = (events, date) => {
  /* const today = new Date();*/
  return events.filter((event) => event.timeEvent.start.getTime() > date.getTime());
  //return events.filter((event) => isFutureDay(event.timeEvent.start, date));
};

export const getPastEvents = (events, date) => {
  //return events.filter((event) => isPastDay(event.timeEvent.start, date));
  return events.filter((event) => event.timeEvent.start.getTime() < date.getTime());
};

export const getEventsInOneDay = (events, date) => {
  return events.filter((event) => isOneDay(event.timeEvent.start, date));
};

export const getEventsByFilter = (events, filterType) => {
  const nowDate = new Date();
  console.log(`filterType`);
  console.log(filterType);
  switch (filterType) {
    case FilterType.EVERYTHING:
      console.log(`everything2`);
      return events;

    case FilterType.FUTURE:
      console.log(`future2`);
      return getFutureEvents(events, nowDate);

    case FilterType.PAST:
      console.log(`past2`);
      return getPastEvents(events, nowDate);
  }

  return events;
};
