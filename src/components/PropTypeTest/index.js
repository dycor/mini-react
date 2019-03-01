import {Martine} from "../../../martine.js";
import { BadProps } from "../BadProps/index.js";
import { GoodProps } from "../GoodProps/index.js";

export class PropTypeTest extends Martine.Component {
  render() {

    return  Martine.createElement('div',null,
      Martine.createElement('h1',{style: 'text-align: center; color: #fff'},'Regarder la console'),
      Martine.createElement(BadProps,{age : 'hello'}),
      Martine.createElement(GoodProps,{age : 12,men : true}),
        Martine.createElement('a', {class: 'pure-button pure-button-primary', href: '/router'}, 'Routage')
    );
  }

}
