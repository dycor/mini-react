import {Martine} from "../../../martine.js";

export class Counter extends Martine.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  onClick = () => {
    const { count } = this.state;
    this.setState({count : count + 1});
  };


  render() {
    const { count } = this.state;

    return  Martine.createElement('div',{style: 'text-align: center; color: #fff'},
      Martine.createElement('h1',null,'Counter'),
      Martine.createElement('label', null, count),
      Martine.createElement('button', {onclick: this.onClick, class: 'pure-button', style: 'margin-left:20px'}, `Click`),
    );
  }
}