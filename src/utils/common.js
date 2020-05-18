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
export {debounce, formatTime, formatDate};
