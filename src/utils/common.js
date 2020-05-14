const DEBOUNCE_INTERVAL = 700; // ms
let lastTimeout;

const debounce = (cb) => {
  if (lastTimeout) {
    clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
};

export {debounce};
