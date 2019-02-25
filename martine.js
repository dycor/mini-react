import { isClass } from "./src/martine-helper.js";
let rootDOMElement, rootVDom;

class Component {
  constructor(props) {
    this.props = props;
    this.state  = {};
    this.arrayValueType = {};
  }
  setState(state) {
    this.state = { ...this.state, ...state};
    shouldUpdate();
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