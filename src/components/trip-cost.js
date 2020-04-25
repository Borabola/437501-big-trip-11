import {createElement} from "./util";

const createTripCostTemplate = () => {
  return (
    `<p class="trip-info__cost">
       Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
     </p>`
  );
};

export default class TripCost {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate();
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
