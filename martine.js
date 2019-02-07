
  function anElement(element, children) {

    if (isClass(element)) {
      const component = new element();
      return component.render();
    }
    else if (typeof(element) === 'function') {
      return element();
    } else {
      const anElement = document.createElement(element);

      children.forEach(child => {
        if (typeof(child) === 'object') {
          anElement.appendChild(child);
        } else {
          anElement.innerText += child;
        }
      });
      return anElement;
    }

  }

  function createElement(el, props, ...children) {
    return anElement(el, children);
  }

  export const Martine = {
    createElement
  };
  export const MartineDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };

  function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
  }

