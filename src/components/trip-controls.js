import {createElement} from "./util";

const createTripControlsTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
       <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
       <a class="trip-tabs__btn" href="#">Stats</a>
     </nav>`
  );
};

export default class TripControls {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripControlsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
