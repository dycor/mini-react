import { isClass } from "./src/martine-helper.js";
let rootDOMElement, rootVDom;

class Component {
  constructor(props) {
    this.props = props;
    this.state  = {};
    this.arrayTypeCheck = {};
    this.arrayValueCheck = {};
  }
  setState(state) {
    this.state = { ...this.state, ...state};
    shouldUpdate();
  }
    setArrayTypeCheck(array){
        this.arrayTypeCheck = array;
    }
    propType(){
        console.log(type_check_v1({ "prop1": 1 }, "object"));
        for(let value in this.arrayTypeCheck) {
            if(this.arrayValueCheck.hasOwnProperty(value) && this.arrayTypeCheck.hasOwnProperty(value)){
                if(!type_check(
                    this.arrayValueCheck[value],
                    {
                        type: this.arrayTypeCheck[value],
                        value: this.arrayValueCheck[value]
                    }
                )){
                    console.log('un des types nest pas bon');
                    return false;
                }
                return false;
            }
        }
        return true;
    }
}
function shouldUpdate() {
  while (rootDOMElement.hasChildNodes()) {
      rootDOMElement.removeChild(rootDOMElement.lastChild);
  }
  MartineDOM.render(rootVDom, rootDOMElement);
}

function anElement(element, props , children) {

  if (isClass(element)) {
    return new element(props);
  }
  else if (typeof(element) === 'function') {
    return element(props);
  } else {
    const anElement = document.createElement(element);

    children.forEach(child => appendChild(child,anElement));
    props ? Object.keys(props).forEach(prop => appendProp(prop,props,anElement)) :null ;

    return anElement;
  }
  
  function appendChild(child,anElement) {
    if (typeof(child) === 'object') {
      anElement.appendChild(child);
    } else {
      const text = document.createTextNode(child)
      anElement.appendChild(text);
    }
  }
  
  function appendProp(prop,props,anElement) {
    if (/^on.*$/.test(prop)) {
      anElement.addEventListener(prop.substring(2).toLowerCase(), props[prop]);
    } else {
      anElement.setAttribute(prop, props[prop]);
    }
  }
}

function createElement(el, props, ...children) {
  return anElement(el, props, children);
}

export const Martine = {
  createElement,
  Component
};

export const MartineDOM = {
  render: (element, domElement) => {
    rootVDom = element;
    rootDOMElement = domElement;

    const currentDOM = typeof (rootVDom) === 'object' ? rootVDom.render() : rootVDom;

    domElement.appendChild(currentDOM);
  }
};



function type_check_v1(data, type) {
    switch(typeof data) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof data;
        case "object":
            switch(type) {
                case "null":
                    return data === null;
                case "array":
                    return Array.isArray(data);
                default:
                    return data !== null && !Array.isArray(data);
            }

    }

    return false;
}
function type_check_v2(data, conf) {
    for (let key of Object.keys(conf)) {
        switch (key) {
            case 'type':
                if (!type_check_v1(data, conf[key])) return false;
                break;
            case 'value':
                if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
                break;
            case 'enum':
                let valid = false;
                for (let value of conf[key]) {
                    valid = type_check_v2(data, {value});
                    if (valid) break;
                }
                if(!valid) return false;
        }
    }

    return true;
}
function type_check(data, conf) {
    for (let key of Object.keys(conf)) {
        switch (key) {
            case 'type':
            case 'value':
            case 'enum':
                let newConf = {};
                newConf[key] = conf[key];
                if (!type_check_v2(data, newConf)) return false;
                break;
            case 'properties':
                for (let prop of Object.keys(conf[key])) {
                    if (data[prop] === undefined) return false;
                    if (!type_check(data[prop], conf[key][prop])) return false;
                }
                break;
        }
    }

    return true;
}