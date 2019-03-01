import {Martine} from "../../../martine.js";

export class BadProps extends Martine.Component {

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

    return  Martine.createElement('div',{style: 'background: #fff;text-align: center;color: #48AFE2;  padding:20px 0'},
      Martine.createElement('h2', null,'Bad Props'),
      Martine.createElement('label', null,'age : '),
      Martine.createElement('span', null,this.props.age),
    );
  }

}
