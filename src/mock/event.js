import {generateEventTime} from "./time";

const OFFER_COUNT_MAX = 3;
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
    name: `Drive`,
    type: `Transfer`,
    icon: `img/icons/drive.png`,
    title: `Drive to`
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
    title: `Check-in`
  },
  {
    name: `Sightseeing`,
    type: `Activity`,
    icon: `img/icons/sightseeing.png`,
    title: `Sightseeing`
  }
];

const CITIES = [`Chamonix`, `Amsterdam`, `Geneva`, `London`, `Paris`, `Barcelona`];
const CITIES_DESCRIPTION = [
  {
    city: `Chamonix`,
    description: `Chamonix-Mont-Blanc, more commonly known as Chamonix, is a commune in the Haute-Savoie department in the Auvergne-Rhône-Alpes region in south-eastern France. It was the site of the first Winter Olympics in 1924.Situated to the north of Mont Blanc, between the peaks of the Aiguilles Rouges and the notable Aiguille du Midi, Chamonix is one of the oldest ski resorts in France. `
  },
  {
    city: `Amsterdam`,
    description: `Amsterdam is the capital and most populous city of the Netherlands with a population of 872,680 within the city proper, 1,380,872 in the urban area[5] and 2,410,960 in the metropolitan area.[9] Found within the province of North Holland,[13][14] Amsterdam is colloquially referred to as the "Venice of the North", attributed by the large number of canals which form a UNESCO World Heritage Site.`
  },
  {
    city: `Barcelona`,
    description: `Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. `
  },
  {
    city: `Geneva`,
    description: `Geneva is the second-most populous city in Switzerland (after Zürich) and the most populous city of Romandy, the French-speaking part of Switzerland`
  },
  {
    city: `London`,
    description: `London is the capital and largest city of England and the United Kingdom.[7][8] Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia. `
  },
  {
    city: `Paris`,
    description: `Paris is the capital and most populous city of France, with a population of 2,148,271 residents (official estimate, 1 January 2020) in an area of 105 square kilometres (41 square miles).Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and arts.`
  }
];

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
  return (type === `Activity`) ? shuffle(PLACE_OFFERS).slice(0, iMax) : shuffle(TRANSPORT__OFFERS).slice(0, iMax);
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
    id: String(new Date() + Math.random()),
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
  TYPES,
  CITIES_DESCRIPTION,
  generateStartDate,
  generateEvent,
  generateEvents,
  getRandomIntegerNumber,
  TRANSPORT__OFFERS,
  PLACE_OFFERS,
  OFFER_COUNT_MAX
};
