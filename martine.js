import { isClass, propType } from "./src/martine-helper.js";
let rootDOMElement, rootVDom;
const MARTINE_CLASS = 'MARTINE_CLASS';

class Component {
  constructor(props) {
    this.props = props;
    this.state  = {};
  }
  setState(state) {
    this.state = { ...this.state, ...state};
    shouldUpdate();
  }

}
function shouldUpdate() {
  const activeEltId = document.activeElement ? document.activeElement.id : null;

  while (rootDOMElement.hasChildNodes()) {
      rootDOMElement.removeChild(rootDOMElement.lastChild);
  }

  MartineDOM.render(rootVDom, rootDOMElement,activeEltId);
}

function anElement(element, props , children) {

  if (isClass(element)) {
    let classElt = new element(props);
    classElt.type = MARTINE_CLASS;
    return classElt ;
  }
  else if (typeof(element) === 'function') {
    return element(props);
  } else {
    const anElement = document.createElement(element);

    children.forEach(child => appendChild(child,anElement));
    if(props) Object.keys(props).forEach(prop => appendProp(prop,props,anElement));

    return anElement;
  }
  
  function appendChild(child,anElement) {
    if (child.type === MARTINE_CLASS) {
      anElement.appendChild(child.render());
    }
    else if (typeof(child) === 'object') {
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
    propType,
  Component
};

export const MartineDOM = {
  render: (element, domElement,activeEltId) => {
    rootVDom = element;
    rootDOMElement = domElement;

    const currentDOM = typeof (rootVDom) === 'object' ? rootVDom.render() : rootVDom;

    domElement.appendChild(currentDOM);
    if (activeEltId) {
      currentDOM.querySelector(`#${activeEltId}`).focus()
    }

  }
};