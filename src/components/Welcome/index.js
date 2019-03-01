import {Martine} from "../../../martine.js";

export class Welcome extends Martine.Component  {
  render() {
     return  Martine.createElement('div',null,
         Martine.createElement('h1', null, 'Welcome'),
         Martine.createElement('div', null,
            Martine.createElement('h2', null, 'Bonjour est bienvenue sur le micro framework Martine.js'),
             Martine.createElement('div', null,
                 Martine.createElement('p', null, 'Découvrir le framework Martine.js'),
             )
        )
     );
  }
}