import {generateType, generateCity, MAX_OFFER_PRICE, MIN_OFFER_PRICE, getRandomIntegerNumber, TRANSPORT__OFFERS, PLACE_OFFERS, OFFER_COUNT_MAX} from "../mock/event";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const createOfferTemplte = (offer, offerPrice) => {
  return (`<li class="event__offer">
             <span class="event__offer-title">${offer}</span>
             &plus;
             &euro;&nbsp;<span class="event__offer-price">${offerPrice}</span>
            </li>`);
};

const createOfferListTemplte = (type) => {
  const iMax = getRandomIntegerNumber(0, OFFER_COUNT_MAX);
  const randomOffers = (type === `place`) ? shuffle(PLACE_OFFERS) : shuffle(TRANSPORT__OFFERS);
  let offerListContent = ``;
  for (let i = 0; i < iMax; i++) {
    offerListContent += createOfferTemplte(randomOffers[i].name, randomOffers[i].price);
  }
  return (
    `<ul class="event__selected-offers">${offerListContent}</ul>`
  );
};

export const createTripEventsItemTemplate = () => {
  const type = generateType();
  const city = generateCity();
  console.log(type.type);
  const offerList = createOfferListTemplte(type.type);

  const price = getRandomIntegerNumber(MIN_OFFER_PRICE / 10, MAX_OFFER_PRICE / 10) * 10;
  console.log(price);
  return (
    `<li class="trip-events__item">
       <div class="event">
         <div class="event__type">
           <img class="event__type-icon" width="42" height="42" src="${type.icon}" alt="${type.name} icon">
         </div>
         <h3 class="event__title">${type.title} ${city.city}</h3>

         <div class="event__schedule">
           <p class="event__time">
             <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
             &mdash;
             <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
           </p>
           <p class="event__duration">30M</p>
         </div>

         <p class="event__price">
           &euro;&nbsp;<span class="event__price-value">${price}</span>
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
