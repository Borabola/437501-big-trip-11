import FilterComponent from "../components/trip-filters.js";
import {FilterType} from "../const.js";
import {render, replace, RenderPosition} from "../utils/render.js";
import {getEventsByFilter} from "../utils/filter.js";

export default class FilterController {
  constructor(container, eventsModel) {
    this._container = container;
    this._eventsModel = eventsModel;

    this._activeFilterType = FilterType.EVERYTHING;
    this._filterComponent = null;

    this._onDataChange = this._onDataChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._eventsModel.setDataChangeHandler(this._onDataChange);
  }

  render() {
    const container = this._container;
    const normalizedEvents = this._eventsModel.getEvents();
    const filters = Object.values(FilterType).map((filterType) => {
      return {
        name: filterType === this._activeFilterType,
        count: getEventsByFilter(normalizedEvents, filterType).length,
        checked: filterType === this._activeFilterType,
      };
    });
    const oldComponent = this._filterComponent;

    this._filterComponent = new FilterComponent(filters);
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);

    if (oldComponent) {
      replace(this._filterComponent, oldComponent);
    } else {
      render(container, this._filterComponent, RenderPosition.BEFOREEND);
    }
  }

  _onFilterChange(filterType) {
    this._eventsModel.setFilter(filterType);
    console.log(`filterType в контроллере фильтр`);
    console.log(filterType);
    this._activeFilterType = filterType;
  }

  _onDataChange() {
    this.render();
  }
}

