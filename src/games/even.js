/* eslint-disable import/extensions */

import { getRandomInt } from '../utils/functions.js';

import game from '../index.js';

const maxNumber = 100;

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getData = () => {
  const question = getRandomInt(0, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(task, getData);
