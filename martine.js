class Component {
  constructor(props) {
    this.props = props;
    this.state  = {};
  }
  setState(state) {
    this.state = { ...this.state, ...state};
  }
}

function anElement(element, props , children) {

  if (isClass(element)) {
    const component = new element(props);
    return component.render();
  }
  else if (typeof(element) === 'function') {
    return element(props);
  } else {
    const anElement = document.createElement(element);

    children.forEach(child => {
      if (typeof(child) === 'object') {
        anElement.appendChild(child);
      } else {
        const text = document.createTextNode(child)
        anElement.appendChild(text);
      }
    });

    if(props) {
      Object.keys(props).forEach(propName => {
        if (/^on.*$/.test(propName)) {
          anElement.addEventListener(propName.substring(2).toLowerCase(), props[propName]);
        } else {
          anElement.setAttribute(propName, props[propName]);
        }
      });
    }

    return anElement;
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
    domElement.appendChild(element);
  }
};

function isClass(v) {
  return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
}


