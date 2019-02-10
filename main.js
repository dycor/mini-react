import {router} from './modules/router/index.js'
import {Martine,MartineDOM} from './martine.js';

class MyButton extends Martine.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.state)
    return Martine.createElement('button', {onclick: this.props.onClick}, `Click`);
  }
}
const myBtn = Martine.createElement(MyButton, {onClick: () => console.log('Salut')}, null);
MartineDOM.render(myBtn, document.getElementById('root'));