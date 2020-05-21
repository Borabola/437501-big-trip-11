import moment from "moment";

const DEBOUNCE_INTERVAL = 700; // ms
let lastTimeout;

const debounce = (cb) => {
  if (lastTimeout) {
    clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
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
export {debounce, formatTime, formatDate, isOneDay};
