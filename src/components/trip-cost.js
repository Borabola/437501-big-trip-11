import AbstractComponent from "./abstract-component.js";

const createTripCostTemplate = () => {
  return (
    `<p class="trip-info__cost">
       Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
     </p>`
  );
};

export default class TripCost extends AbstractComponent {
  getTemplate() {
    return createTripCostTemplate();
  }
}
