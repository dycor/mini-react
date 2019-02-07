import {router} from './src/components/Router/main.js'
import {Martine,MartineDOM} from './martine.js';

//Etape
const Hello = function () {
  return Martine.createElement('div', null, `Hello World`);
};
const helloWorld = Martine.createElement(Hello, null, null);
const helloWorld2 = Martine.createElement(Hello, null, null);
const regularDiv = Martine.createElement('div', null, `I'm just a regular div`);

const parent = Martine.createElement('div', null,
  helloWorld,
  helloWorld2,
  regularDiv,
  ` I'm just a text`
);

MartineDOM.render(parent, document.getElementById('root'));