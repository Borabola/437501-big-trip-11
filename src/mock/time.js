import {getRandomIntegerNumber} from "./event";

export const generateEventTime = () => {
  const startTime = getRandomIntegerNumber(0, 1440);
  const duration = getRandomIntegerNumber(0, 300); // до 5 часов
  const getDurationLine = () => {
    return (
      (duration <= 59) ? `${duration}M` : Math.floor(duration / 60) + `H ` + (duration - Math.floor(duration / 60) * 60) + `M`);
  };
  const finishTime = startTime + duration;
  return {
    start: Math.floor(startTime / 60) + `:` + (startTime - Math.floor(startTime / 60) * 60),
    finish: Math.floor(finishTime / 60) + `:` + (finishTime - Math.floor(finishTime / 60) * 60),
    durationLine: getDurationLine()
  };
};
