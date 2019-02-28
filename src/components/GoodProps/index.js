import {Martine} from "../../../martine.js";

export class GoodProps extends Martine.Component {

  constructor(props) {
    super(props);
    Martine.propType(
      this.props,
      {
        age:'number',
        men:'boolean',
      }
    );
  }

  render() {

    return  Martine.createElement('div',null,
      Martine.createElement('h2', null,'Good Props'),
      Martine.createElement('label', null,'age : '),
      Martine.createElement('span', null,this.props.age),
      Martine.createElement('br'),
      Martine.createElement('label', null,'men : '),
      Martine.createElement('span', null,this.props.men),
    );
  }

}
