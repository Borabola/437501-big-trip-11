import {generateEventTime} from "./time";

const OFFER_COUNT_MAX = 5;
const MIN_OFFER_PRICE = 10;
const MAX_OFFER_PRICE = 1000;
const MAX_IMG_COUNT = 5;
const MAX_SENTENCE_COUNT = 5;
const YEAR = 20;

const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`];

const TYPES = [
  {
    name: `Taxi`,
    type: `Transfer`,
    icon: `img/icons/taxi.png`,
    title: `Taxi to`
  },
  {
    name: `Bus`,
    type: `Transfer`,
    icon: `img/icons/bus.png`,
    title: `Bus to`
  },
  {
    name: `Car`,
    type: `Transfer`,
    icon: `img/icons/drive.png`,
    title: `Drive to`
  },
  {
    name: `Plane`,
    type: `Transfer`,
    icon: `img/icons/flight.png`,
    title: `Flight to`
  },

  {
    name: `Ship`,
    type: `Transfer`,
    icon: `img/icons/ship.png`,
    title: `Get to`
  },
  {
    name: `Train`,
    type: `Transfer`,
    icon: `img/icons/train.png`,
    title: `Get to`
  },
  {
    name: `Transport`,
    type: `Transfer`,
    icon: `img/icons/transport.png`,
    title: `Get to`
  },
  {
    name: `Restaurant`,
    type: `Activity`,
    icon: `img/icons/restaurant.png`,
    title: `Visit the restaurant`
  },
  {
    name: `Check-in`,
    type: `Activity`,
    icon: `img/icons/check-in.png`,
    title: `Check-in in`
  },
  {
    name: `Sightseeing`,
    type: `Activity`,
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
    monthNumber: MONTH_NAMES.indexOf(monthRandom) + 1,
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

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const generateOfferList = (type) => {
  const iMax = getRandomIntegerNumber(0, OFFER_COUNT_MAX);
  let randomOffers = [];
  return randomOffers = (type === `Activity`) ? shuffle(PLACE_OFFERS).slice(0, iMax) : shuffle(TRANSPORT__OFFERS).slice(0, iMax);
};

const generateImgs = () => {
  const imgCount = getRandomIntegerNumber(0, MAX_IMG_COUNT);
  let imgs = [];
  for (let i = 0; i < imgCount; i++) {
    let it = `http://picsum.photos/248/152?r=${Math.random(0, 500)}`;
    imgs.push(it);
  }
  return imgs;
};

const generateDescription = () => {
  const sentenceCount = getRandomIntegerNumber(1, MAX_SENTENCE_COUNT);
  const newDescriptions = descriptions[0].split(`. `).slice(0, sentenceCount);
  return (
    newDescriptions.join(`. `) + `.`
  );
};

const generateEvent = () => {
  const type = getRandomArrayItem(TYPES);
  // const monthRandom = getRandomArrayItem(MONTH_NAMES);
  const time = generateEventTime();
  const offers = generateOfferList();
  const imgs = generateImgs();
  const descriptionText = generateDescription();
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
    offers,
    imgs,
    descriptionText,
    };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {
  //generateType,
  //generateCity,
  generateStartDate,
  //MAX_OFFER_PRICE,
  //MIN_OFFER_PRICE,
  generateEvent,
  generateEvents,
  getRandomIntegerNumber,
  TRANSPORT__OFFERS,
  PLACE_OFFERS,
  OFFER_COUNT_MAX
};
