import {Martine} from "../../../martine.js";

export class Welcome extends Martine.Component  {
  render() {
     return  Martine.createElement('div',{class: 'pure-g'},
         Martine.createElement('div', {class: 'pure-u-5-5', style: 'text-align: center; color: #fff; padding: 20px 0'},
            Martine.createElement('h1', {class: 'pure-u-5-5'}, 'Welcome'),
            Martine.createElement('h2', {class: 'center'}, 'Bonjour est bienvenue sur le micro framework Martine.js'),
            Martine.createElement('a', {class: 'pure-button pure-button-primary', href: '/say-my-name'}, 'Découvrir le framework Martine.js'),
        )
     );
  }
}