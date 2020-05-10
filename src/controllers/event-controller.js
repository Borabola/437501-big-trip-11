import TripEventsItem from "../components/trip-events-item";
import EventEditComponent from "../components/event-edit.js";
import {render, replace, RenderPosition} from "../utils/render.js";


export default class EventController {
  constructor(container) {
    this._container = container;

    this._eventComponent = null;
    this._eventEditComponent = null;
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(event) {
    this._eventComponent = new TripEventsItem(event);
    this._eventEditComponent = new EventEditComponent(event);

    this._eventComponent.setEditButtonClickHandler(() => {
      console.log(`это событие`);
      console.log(event);
      this._replaceEventToEdit();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventEditComponent.setSubmitHandler((evt) => {
      evt.preventDefault();
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventEditComponent.setEditButtonClickHandler(() => {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventEditComponent.setFavoritesButtonClickHandler(() => {
      console.log(`favorite`);
    });

    render(this._container, this._eventComponent, RenderPosition.BEFOREEND);
  }

  _replaceEventToEdit() {
    replace(this._eventEditComponent, this._eventComponent);
  }

  _replaceEditToEvent() {
    replace(this._eventComponent, this._eventEditComponent);
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
