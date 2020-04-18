const OFFER_COUNT_MAX = 5;
const TYPES = [
  {
    name: `Taxi`,
    icon: `img/icons/taxi.png`,
    title: `Taxi to`
  },
  {
    name: `Bus`,
    icon: `img/icons/bus.png`,
    title: `Bus to`
  },
  {
    name: `Car`,
    icon: `img/icons/drive.png`,
    title: `Drive to`
  },
  {
    name: `Plane`,
    icon: `img/icons/flight.png`,
    title: `Flight to`
  },
  {
    name: `Restaurant`,
    icon: `img/icons/restaurant.png`,
    title: `Visit the restaurant`
  },
  {
    name: `Check-in`,
    icon: `img/icons/check-in.png`,
    title: `Check-in in`
  },
  {
    name: `Ship`,
    icon: `img/icons/ship.png`,
    title: `Get to`
  },
  {
    name: `Sightseeing`,
    icon: `img/icons/sightseeing.png`,
    title: `Sightseeing in`
  },
  {
    name: `Train`,
    icon: `img/icons/train.png`,
    title: `Get to`
  },
  {
    name: `Transport`,
    icon: `img/icons/transport.png`,
    title: `Get to`
  }
];

const CITIES = [`Chamonix`, `Amsterdam`, `Geneva`, `London`, `Paris`, `Barcelona`];
const OFFERS = [
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
    name: `Lunch in city`,
    price: 80,
  },
  {
    name: `Rent a car`,
    price: 200,
  },
  {
    name: `Add breakfast`,
    price: 50,
  },
];

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  console.log(array.length);
  return array[randomIndex];
};

/**
 * Функция перемешивания массива
 *@param {*[]} array
 *@return {number[]} перемешенный массив
 */
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

const createOfferListTemplte = () => {
  const iMax = getRandomIntegerNumber(0, OFFER_COUNT_MAX);
  const randomOffers = shuffle(OFFERS);
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
    icon: type.icon,
    title: type.title
  };
};

const generateCity = () => {
  return {
    city: getRandomArrayItem(CITIES),
  };
};

export {generateType, generateCity, createOfferListTemplte};
