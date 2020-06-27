import {getRandomIntegerNumber, PLACE_OFFERS, TRANSPORT__OFFERS} from "../mock/event";
// import {startDate} from "./trip-days-item";
import AbstractSmartComponent from "./abstract-smart-component";
import {TYPES, CITIES_DESCRIPTION} from "../mock/event";
import {debounce, formatTime, formatDate} from "../utils/common";
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_blue.css";


const createOfferItem = (event, offer) => {
  let isChecked = ``;
  if (event.offers.length > 0) {
    isChecked = (event.offers.find((item) => item.name === offer.name)) ? `checked` : ``;
  }

  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats" ${isChecked}>
      <label class="event__offer-label" for="event-offer-seats-1">
        <span class="event__offer-title">${offer.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
  );
};

const createOfferList = (event) => {
  const offers = (event.type.type === `Activity`) ? PLACE_OFFERS : TRANSPORT__OFFERS;
  let offerListItems = ``;
  for (let i = 0; i < offers.length; i++) {
    offerListItems += createOfferItem(event, offers[i]);
  }
  return (
    `<div class="event__available-offers">${offerListItems}</div>`
  );
};

const createImg = (imgLink) => {
  return (
    `<img class="event__photo" src=${imgLink} alt="Event photo">`
  );
};

const createImgsListTeplate = (event) => {
  let imgList = ``;
  for (let i = 0; i < event.imgs.length; i++) {
    imgList += createImg(event.imgs[i]);
  }
  return (
    imgList
  );
};


const getNewTypeInfo = (typeName) => {
  let i = TYPES.length;
  while (i--) {
    if (TYPES[i].name.toLowerCase() === typeName) {
      return TYPES[i];
    }
  }
  return TYPES[0];
};

const getNewDescription = (cityName) => {
  let i = CITIES_DESCRIPTION.length;
  while (i--) {
    if (CITIES_DESCRIPTION[i].city === cityName) {
      return CITIES_DESCRIPTION[i].description;
    }
  }
  return ``;
};


const createEventEditTemplate = (event) => {
  const offerList = createOfferList(event);
  const imgList = createImgsListTeplate(event);
  const startDate = formatDate(event.timeEvent.start);
  const startTime = formatTime(event.timeEvent.start);
  const finishDate = formatDate(event.timeEvent.finish);
  const finishTime = formatTime(event.timeEvent.finish);
  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="${event.type.icon}" alt="${event.type.name} icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>
            </fieldset>

            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${event.type.title}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${event.city}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
            <option value="Saint Petersburg"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate.toString()} ${startTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${finishDate} ${finishTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${event.price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>

        <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
        <label class="event__favorite-btn" for="event-favorite-1">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </label>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>

      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          ${offerList}
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${event.descriptionText}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
              ${imgList}
            </div>
          </div>
        </section>
      </section>
    </form>`
  );
};

/*const parseFormData = (formData) => {
  const repeatingDays = DAYS.reduce((acc, day) => {
    acc[day] = false;
    return acc;
  }, {});
  const date = formData.get(`date`);

  return {
    description: formData.get(`text`),
    color: formData.get(`color`),
    dueDate: date ? new Date(date) : null,
    repeatingDays: formData.getAll(`repeat`).reduce((acc, it) => {
      acc[it] = true;
      return acc;
    }, repeatingDays),
  };
};*/

const parseFormData = (formData) => {
  // const date = formData.get(`date`);
  const typeValue = formData.get(`event-type`);
  const typeIndex = TYPES.findIndex((item) => item.name === typeValue);
  return {
    type: {
      name: TYPES[typeIndex].name,
      type: TYPES[typeIndex].type,
      icon: TYPES[typeIndex].icon,
      title: TYPES[typeIndex].title
    },
    city: formData.get(`event-destination`),
    price: formData.get(`event-price`),
    timeEvent: {
      start: formData.get(`time.start`),
      finish: formData.get(`time.finish`),
    },
    // offers: formData.get(`offers`),
    // imgs: formData.get(`imgs`),
    descriptionText: formData.get(`descriptionText`)
  };

};

export default class EventEdit extends AbstractSmartComponent {
  constructor(event) {
    super();
    this._event = event;
    this._submitHandler = null;
    this._rollupHandler = null;
    this._flatpickrStart = null;
    this._flatpickrFinish = null;
    this._deleteButtonClickHandler = null;

    this._subscribeOnEvents();
    this._applyFlatpickr();
  }

  getTemplate() {
    return createEventEditTemplate(this._event);
  }

  removeElement() {
    if (this._flatpickr) {
      this._flatpickr.destroy();
      this._flatpickr = null;
    }

    super.removeElement();
  }


  recoveryListeners() {
    this.setSubmitHandler(this._submitHandler);
    this.setEditButtonClickHandler(this._rollupHandler);
    this.setDeleteButtonClickHandler(this._deleteButtonClickHandler);
    this._subscribeOnEvents();
  }

  rerender() {
    super.rerender();
    this._applyFlatpickr();
  }

  reset() {
    this.rerender();
  }

  getData() {
    const form = this.getElement().querySelector(`.event__edit`);
    const formData = new FormData(form);
    console.log(formData);
    return parseFormData(formData);
  }

  setSubmitHandler(handler) {
    if (this.getElement().querySelector(`.event--edit`)) {
      this.getElement().querySelector(`.event--edit`)
        .addEventListener(`submit`, handler);

      this._submitHandler = handler;
    }
  }

  setDeleteButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__reset-btn`)
      .addEventListener(`click`, handler);

    this._deleteButtonClickHandler = handler;
  }

  setEditButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);

    this._rollupHandler = handler;
  }

  setFavoritesButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__favorite-btn`)
      .addEventListener(`click`, handler);
  }

  _subscribeOnEvents() {
    const element = this.getElement();

    element.querySelector(`.event__input--price`).addEventListener(`input`, (evt) => {
      this._event.price = evt.target.value;

      this.rerender();
    });

    element.querySelector(`.event__type-list`).addEventListener(`change`, (evt) => {
      const newEvent = getNewTypeInfo(evt.target.value);
      this._event.type.name = newEvent.name;
      this._event.type.type = newEvent.type;
      this._event.type.icon = newEvent.icon;
      this._event.type.title = newEvent.title;

      this.rerender();
    });

    element.querySelector(`.event__input--destination`).addEventListener(`input`, (evt) => {
      this._event.city = evt.target.value;
      this._event.descriptionText = getNewDescription(evt.target.value);
      debounce(function () {
        this.rerender();
      }.bind(this));
    });
  }

  _applyFlatpickr() {
    if (this._flatpickrStart) {
      this._flatpickrStart.destroy();
      this._flatpickrStart = null;
    }

    if (this._flatpickrFinish) {
      this._flatpickrFinish.destroy();
      this._flatpickrFinish = null;
    }

    const dateStartElement = this.getElement().querySelector(`#event-start-time-1`);
    const dateFinishElement = this.getElement().querySelector(`#event-end-time-1`);
    this._flatpickrStart = flatpickr(dateStartElement, {
      //altInput: true,
      allowInput: true,
      defaultDate: this._event.timeEvent.start,
      dateFormat: `d/m/y h:i`,
    });

    this._flatpickrFinish = flatpickr(dateFinishElement, {
      //altInput: true,
      allowInput: true,
      defaultDate: this._event.timeEvent.finish,
      dateFormat: `d/m/y h:i`,
    });
  }
}
