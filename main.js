import {Martine,MartineDOM} from './martine.js';
import { SayMyName } from './src/components/SayMyName/index.js';

MartineDOM.render(Martine.createElement(SayMyName), document.getElementById('root'));