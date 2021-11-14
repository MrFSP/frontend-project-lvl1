/* eslint-disable import/extensions */
import { getRandomInt, isInt } from '../utils/functions.js';

import game from '../index.js';

const highBorderOfNumbers = 100; // High border of numbers (min 100)
const minMultiplyer = 2;
const maxMultiplyer = highBorderOfNumbers / 10;

const task = 'Find the greatest common divisor of given numbers.';

const getRandomNumbersForGame = () => {
  const multy = getRandomInt(minMultiplyer, maxMultiplyer);
  const num1 = multy * getRandomInt(2, 10);
  let num2 = num1;
  while (num1 === num2) {
    num2 = multy * getRandomInt(2, 10);
  }
  return { num1, num2 };
};

const getGreatestCommonDivisor = (n1, n2) => {
  const minNumber = n1 < n2 ? n1 : n2;
  let divisor = minNumber;
  while (divisor > 2) {
    if ((isInt(n1, divisor) === true) && (isInt(n2, divisor) === true)) {
      break;
    }
    divisor -= 1;
  }
  return divisor;
};

const getData = () => {
  const { num1, num2 } = getRandomNumbersForGame();
  const answer = String(getGreatestCommonDivisor(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, answer };
};

export default () => game(task, getData);
