
  function anElement(element, props , children) {

    if (isClass(element)) {
      const component = new element();
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
      return anElement;
    }

  }

  function createElement(el, props, ...children) {
    return anElement(el, props, children);
  }

  export const Martine = {
    createElement
  };
  export const MartineDOM = {
    render: (element, domElement) => {
      domElement.appendChild(element);
    }
  };

  function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
  }

