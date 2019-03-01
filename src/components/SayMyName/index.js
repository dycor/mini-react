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

    return  Martine.createElement('div', null,
        Martine.createElement('div', {class:'pure-g', style: 'display:flex; align-items: center; justify-content: center; '},
            Martine.createElement('div',{class:'pure-u-1-5', style: 'background-color: #fff;padding: 20px;color: #48AFE2;border-radius: 25px;box-shadow: 10px 3px 10px 0px rgba(0,0,0,0.75)'},
                Martine.createElement('h1',null,'Say My name'),
                Martine.createElement('form', {class: 'pure-form'},
                    Martine.createElement('input', {id : 'myname',oninput: (e) => this.onInput(e), value :name})
                ),
                Martine.createElement('p', null,'My name is '+name)
            ),
            Martine.createElement('div', {class: 'pure-u-1-2'},
                Martine.createElement('iframe', {src: 'https://carbon.now.sh/embed/?bg=rgba(72%2C175%2C226%2C1)&t=blackboard&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=100px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Fira%20Code&fs=14px&lh=152%25&si=false&code=constructor(props)%2520%257B%250A%2520%2520%2520%2520super(props)%253B%250A%2520%2520%2520%2520this.state%2520%253D%2520%257B%2520name%2520%253A\'\'%257D%253B%250A%2520%2520%257D%250A%250A%2520%2520onInput%2520%253D%2520(e)%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520this.setState(%257Bname%2520%253A%2520e.target.value%257D)%253B%250A%2520%2520%257D%253B%250A%250A%2520%2520render()%2520%257B%250A%2520%2520%2520%2520const%2520%257B%2520name%2520%257D%2520%253D%2520this.state%253B%250A%250A%2520%2520%2520%2520return%2520%2520Martine.createElement(\'div\'%252Cnull%252C%250A%2520%2520%2520%2520%2520%2520Martine.createElement(\'h1\'%252Cnull%252C\'Say%2520My%2520name\')%252C%250A%2520%2520%2520%2520%2520%2520Martine.createElement(\'input\'%252C%2520%257Bid%2520%253A%2520\'myname\'%252Coninput%253A%2520(e)%2520%253D%253E%2520this.onInput(e)%252C%2520value%2520%253Aname%257D)%252C%250A%2520%2520%2520%2520%2520%2520Martine.createElement(\'label\'%252C%2520null%252C\'My%2520name%2520is%2520\'%252Bname)%252C%250A%2520%2520%2520%2520)%253B%250A%2520%2520%257D&es=2x&wm=false', style:'transform:scale(0.7); width:1024px; height:560px; border:0; overflow:hidden;', sandbox: 'allow-scripts allow-same-origin'})
            )
        ),
        Martine.createElement('a', {class:'pure-button pure-button-primary', href:'/props', style: 'margin: 0 auto;width: 20%;display: block;'}, 'Introduction aux variables')
    );
  }
}
