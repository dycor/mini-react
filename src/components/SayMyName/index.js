import {Martine} from "../../../martine.js";

export class SayMyName extends Martine.Component {

  constructor(props) {
    super(props);
    this.state = { name :''};
  }

  onInput = (e) => {
    this.setState({name : e.target.value});
  };

  render() {
    const { name } = this.state;
    /*Martine.propType(
        this.props,
        {
          name:'number',
          test:'string',
        }
    );*/
    return  Martine.createElement('div',null,
      Martine.createElement('h1',null,'Say My name'),
      Martine.createElement('input', {oninput: (e) => this.onInput(e), value :name}),
      Martine.createElement('label', null,'My name is '+name),
    );
  }

}
