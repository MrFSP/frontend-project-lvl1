import readlineSync from 'readline-sync';

export default () => {
  console.log('\nWelcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};