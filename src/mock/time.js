import {getRandomIntegerNumber} from "./event";
// import {formatTime} from "../utils/common";

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 4);
  targetDate.setDate(targetDate.getDate() + diffValue);
  return targetDate;
};

export const generateEventTime = () => {
  const startTime = getRandomDate(); // getRandomIntegerNumber(0, 1440); // = getRandomDate();
  const duration = getRandomIntegerNumber(0, 300); // до 5 часов
  const getDurationLine = () => {
    return (
      (duration <= 59) ? `${duration}M` : Math.floor(duration / 60) + `H ` + (duration - Math.floor(duration / 60) * 60) + `M`);
  };
  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration - Math.floor(duration / 60) * 60;
  let finishTime = new Date();
  finishTime.setHours(startTime.getHours() + durationHours, startTime.getMinutes() + durationMinutes);
  return {
    // start: formatTime(startTime),
    // finish: formatTime(finishTime),
    start: startTime,
    finish: finishTime,
    durationLine: getDurationLine()
  };
};
