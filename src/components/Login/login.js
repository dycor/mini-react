import {Martine} from "../../../martine.js";

export class Login extends Martine.Component {

    constructor(props) {
        super(props);
        this.state = { name :''}
    }

    onInput = (e) => {
        this.setState({name : e.target.value});
    };

    render() {
        return  Martine.createElement('div',null,
            Martine.createElement('h1',null,'Login')
        );
    }
}