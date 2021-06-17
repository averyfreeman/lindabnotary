const fontsArr = [
  'acme',
  'architects-daughter',
  'courier',
  'cursive',
  'carter-one',
  'days-one',
  'josefin-sans',
  'righteous',
  'ubuntu',
];

// let i = -1;
let i = Math.floor(Math.random() * fontsArr.length);

export const randomFont = fontsArr[i];
