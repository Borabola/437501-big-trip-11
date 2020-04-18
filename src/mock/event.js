const OFFER_COUNT_MAX = 5;
const MIN_OFFER_PRICE = 10;
const MAX_OFFER_PRICE = 1000;


const TYPES = [
  {
    name: `Taxi`,
    type: `transport`,
    icon: `img/icons/taxi.png`,
    title: `Taxi to`
  },
  {
    name: `Bus`,
    type: `transport`,
    icon: `img/icons/bus.png`,
    title: `Bus to`
  },
  {
    name: `Car`,
    type: `transport`,
    icon: `img/icons/drive.png`,
    title: `Drive to`
  },
  {
    name: `Plane`,
    type: `transport`,
    icon: `img/icons/flight.png`,
    title: `Flight to`
  },

  {
    name: `Ship`,
    type: `transport`,
    icon: `img/icons/ship.png`,
    title: `Get to`
  },
  {
    name: `Train`,
    type: `transport`,
    icon: `img/icons/train.png`,
    title: `Get to`
  },
  {
    name: `Transport`,
    type: `transport`,
    icon: `img/icons/transport.png`,
    title: `Get to`
  },
  {
    name: `Restaurant`,
    type: `place`,
    icon: `img/icons/restaurant.png`,
    title: `Visit the restaurant`
  },
  {
    name: `Check-in`,
    type: `place`,
    icon: `img/icons/check-in.png`,
    title: `Check-in in`
  },
  {
    name: `Sightseeing`,
    type: `place`,
    icon: `img/icons/sightseeing.png`,
    title: `Sightseeing in`
  }
];

const CITIES = [`Chamonix`, `Amsterdam`, `Geneva`, `London`, `Paris`, `Barcelona`];
const PLACE_OFFERS = [
  {
    name: `Lunch in city`,
    price: 80,
  },
  {
    name: `Add breakfast`,
    price: 50,
  },
  {
    name: `Rent a car`,
    price: 200,
  },
  {
    name: `Book tickets`,
    price: 40,
  },
  {
    name: `Order Uber`,
    price: 20,
  },
];
const TRANSPORT__OFFERS = [
  {
    name: `Add luggage`,
    price: 50,
  },
  {
    name: `Switch to comfort`,
    price: 80,
  },
  {
    name: `Book tickets`,
    price: 40,
  },
  {
    name: `Rent a car`,
    price: 200,
  },
  {
    name: `Add breakfast`,
    price: 50,
  },
  {
    name: `Order Uber`,
    price: 20,
  },
];

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

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

const generateType = () => {
  const type = getRandomArrayItem(TYPES);
  return {
    name: type.name,
    type: type.type,
    icon: type.icon,
    title: type.title
  };
};

const generateCity = () => {
  return {
    city: getRandomArrayItem(CITIES),
  };
};

export {generateType, generateCity, createOfferListTemplte, MAX_OFFER_PRICE, MIN_OFFER_PRICE, getRandomIntegerNumber};
