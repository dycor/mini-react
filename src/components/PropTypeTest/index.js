import {Martine} from "../../../martine.js";
import { BadProps } from "../BadProps/index.js";
import { GoodProps } from "../GoodProps/index.js";

export class PropTypeTest extends Martine.Component {
  render() {

    return  Martine.createElement('div',null,
      Martine.createElement('h1',null,'Regardez la console'),
      Martine.createElement(BadProps,{age : 'hello'}),
      Martine.createElement(GoodProps,{age : 12,men : true}),
    );
  }

}
