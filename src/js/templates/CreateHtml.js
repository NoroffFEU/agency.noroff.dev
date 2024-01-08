export const createElement = (tagName, classes, children, text, link, src, alt) => {
  
  const element = document.createElement(tagName);
  if(Array.isArray(classes)) {
    element.classList.add(...classes);
  }
  if(Array.isArray(children) && children.length) {
    element.append(...children);
  }
  if(text) {
    element.textContent = text;
  }
  if(link) {
    element.href = link;
  }

  if(tagName === 'img') {
    element.src = src;
    element.alt = alt;
  }

  return element;
};