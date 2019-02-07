
  function anElement(element, children) {
    const anElement = document.createElement(element);
    anElement.innerHTML = children.join(' ');
    return anElement;
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