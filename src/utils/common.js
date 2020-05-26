import moment from "moment";
import {MONTH_NAMES} from "../const";

const DEBOUNCE_INTERVAL = 700; // ms
let lastTimeout;

const debounce = (cb) => {
  if (lastTimeout) {
    clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
};

const getMonthName = (date) => {
  return MONTH_NAMES[date.getMonth()];
};

const formatTime = (date) => {
  return moment(date).format(`hh:mm`);
};

const formatDate = (date) => {
  return moment(date).format(`l`);
};

const isOneDay = (dateA, dateB) => {
  const a = moment(dateA);
  const b = moment(dateB);
  return a.diff(b, `days`) === 0 && dateA.getDate() === dateB.getDate();
};

const isFutureDay = (dateA, dateB) => {
  const a = moment(dateA);
  const b = moment(dateB);
  return a.diff(b, `days`) !== 0 && dateA.getDate() > dateB.getDate();
};

const isPastDay = (dateA, dateB) => {
  const a = moment(dateA);
  const b = moment(dateB);
  return a.diff(b, `days`) !== 0 && dateA.getDate() < dateB.getDate();
};

const getExactDay = (date) => {
  return Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
};

export {debounce, formatTime, formatDate, getMonthName, getExactDay, isOneDay, isFutureDay, isPastDay};
