import {Martine} from "../../../martine.js";

export class Welcome extends Martine.Component  {
  render() {
     return  Martine.createElement('div',null,
         Martine.createElement('h1', null, 'Welcome'));
  }
}