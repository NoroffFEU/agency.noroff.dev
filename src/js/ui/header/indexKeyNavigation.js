/**
 * @description(1) Easy implementation for adjusting up tabIndex on elements when navigating dynamic content with keyboard-presses.
 * @description(2) Sets the href of the child to that of the parent. Easier to "enter"-click nested elements.
 * @description(3) If no nested element, then just higher tabIndex on the element.
 * @param {element} parentElement Could be a "li" element
 * @param {element} childElement Could be an "a" element
 */

export function indexKeyNavigation(parentElement, childElement = null) {
  parentElement.setAttribute('tabindex', '0');
  parentElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (childElement) {
        window.location.href = childElement.href;
      } else {
        window.location.href = parentElement.href;
      }
    }
  });
}
