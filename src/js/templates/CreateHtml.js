/**
 * creates a new HTML element based on the parameters, the tagName parameter determine what kind of element is being created, if the tagName is div, a div element is created,
 * it then sets the classes with the classes parameter, adds text with the text parameter, link with the link parameter, if the tagName is img it adds the src and alt to the image,
 * it then returns the element
 * @param {string} tagName 
 * @param {string} classes 
 * @param {string} children 
 * @param {string} text 
 * @param {string} link 
 * @param {string} src 
 * @param {string} alt 
 * @returns {Element}
 */
export const createElement = (tagName, classes, children, text, link, src, alt) => {
  const element = document.createElement(tagName);
  if (Array.isArray(classes)) {
    element.classList.add(...classes);
  }
  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }
  if (text) {
    element.textContent = text;
  }
  if (link) {
    element.href = link;
  }

  if (tagName === 'img') {
    element.src = src;
    element.alt = alt;
  }

  return element;
};
