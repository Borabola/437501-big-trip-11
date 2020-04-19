import {generateEventTime} from "./time";

const OFFER_COUNT_MAX = 5;
const MIN_OFFER_PRICE = 10;
const MAX_OFFER_PRICE = 1000;
const YEAR = 20;

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
    name: `Add meal`,
    price: 15,
  },
  {
    name: `Order Uber`,
    price: 20,
  },
  {
    name: `Choose seats`,
    price: 5,
  },
];

const MONTH_NAMES = [
  `JAN`,
  `FEB`,
  `MAR`,
  `APR`,
  `MAY`,
  `JUN`,
  `JUL`,
  `AUG`,
  `SEP`,
  `OCT`,
  `NOV`,
  `DES`,
];


const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const generateStartDate = () => {
  const monthRandom = getRandomArrayItem(MONTH_NAMES);
  return {
    day: getRandomIntegerNumber(1, 31),
    month: monthRandom,
    monthNumber: MONTH_NAMES.indexOf(monthRandom),
    year: YEAR,
  };
};

/*const generateType = () => {
  const type = getRandomArrayItem(TYPES);
  return {
    name: type.name,
    type: type.type,
    icon: type.icon,
    title: type.title
  };
}; */

/*const generateCity = () => {
  return {
    city: getRandomArrayItem(CITIES),
  };
};*/


const generateEvent = () => {
  const type = getRandomArrayItem(TYPES);
  // const monthRandom = getRandomArrayItem(MONTH_NAMES);
  const time = generateEventTime();
  return {
    type: {
      name: type.name,
      type: type.type,
      icon: type.icon,
      title: type.title
    },
    city: getRandomArrayItem(CITIES),
    price: getRandomIntegerNumber(MIN_OFFER_PRICE / 10, MAX_OFFER_PRICE / 10) * 10,
    timeEvent: {
      start: time.start,
      finish: time.finish,
      durationLine: time.durationLine,
    },
  }
};
export {
  //generateType,
  //generateCity,
  generateStartDate,
  //MAX_OFFER_PRICE,
  //MIN_OFFER_PRICE,
  generateEvent,
  getRandomIntegerNumber,
  TRANSPORT__OFFERS,
  PLACE_OFFERS,
  OFFER_COUNT_MAX
};
