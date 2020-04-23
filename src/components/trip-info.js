import {createElement} from "./util";

const createTripInfoTemplate = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
       <div class="trip-info__main">
         <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

         <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
       </div>
     </section>`
  );
};

export default class TripInfo {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate();
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
