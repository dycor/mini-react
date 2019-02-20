import {router} from './modules/router/index.js'
import {Martine,MartineDOM} from './martine.js';

class TodoList extends Martine.Component {

  constructor(props) {
    super(props);
    this.setState({'test':'test'});
  }

  onClick() {
    console.log('salut22')
  }

  render() {
    console.log(this.state)
    const title = Martine.createElement('h1',null,'To do list');
    const button =  Martine.createElement('button', {onclick: this.onClick}, `Click`);
    const input =  Martine.createElement('input', {id: 'item-value'});
    return  Martine.createElement('div',null,title,input,button);
  }
}
const myBtn = Martine.createElement(TodoList, null, null);
MartineDOM.render(myBtn, document.getElementById('root'));