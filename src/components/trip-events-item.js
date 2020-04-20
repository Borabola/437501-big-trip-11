import {startDate} from "./trip-days-item";


const createOfferTemplte = (offer, offerPrice) => {
  return (`<li class="event__offer">
             <span class="event__offer-title">${offer}</span>
             &plus;
             &euro;&nbsp;<span class="event__offer-price">${offerPrice}</span>
            </li>`);
};

const createOfferListTemplte = (event) => {
  let offerListContent = ``;
  for (let i = 0; i < event.offers.length; i++) {
    offerListContent += createOfferTemplte(event.offers[i].name, event.offers[i].price);
  }
  return (
    `<ul class="event__selected-offers">${offerListContent}</ul>`
  );
};


export const createTripEventsItemTemplate = (event) => {
  // const event = generateEvent();
  // console.log(event);
  // const type = generateType();
  // const city = generateCity();
  // const timeEvent = generateEventTime();
  // console.log(timeEvent);
  // console.log(type.type);
  const offerList = createOfferListTemplte(event);

  // const price = getRandomIntegerNumber(MIN_OFFER_PRICE / 10, MAX_OFFER_PRICE / 10) * 10;
  // console.log(price);
  return (
    `<li class="trip-events__item">
       <div class="event">
         <div class="event__type">
           <img class="event__type-icon" width="42" height="42" src="${event.type.icon}" alt="${event.type.name} icon">
         </div>
         <h3 class="event__title">${event.type.title} ${event.city}</h3>

         <div class="event__schedule">
           <p class="event__time">
             <time class="event__start-time" datetime="20${startDate.year}-${startDate.monthNumber}-${startDate.day}T ${event.timeEvent.start}">${event.timeEvent.start}</time>
             &mdash;
             <time class="event__end-time" datetime="20${startDate.year}-${startDate.monthNumber}-${startDate.day}T${event.timeEvent.finish}">${event.timeEvent.finish}</time>
           </p>
           <p class="event__duration">${event.timeEvent.durationLine}</p>
         </div>

         <p class="event__price">
           &euro;&nbsp;<span class="event__price-value">${event.price}</span>
         </p>

         <h4 class="visually-hidden">Offers:</h4>
         ${offerList}
         <button class="event__rollup-btn" type="button">
           <span class="visually-hidden">Open event</span>
         </button>
       </div>
     </li>`
  );
};
