/**
 * Dynamic function that displays a message to the user by pre-defined message type, content and a target element.
 *
 * @param {string} type - The type of message, i.e. "danger", "info", "warning" etc.
 * @param {string} content - The content of the message.
 * @param {string} target - Target element class or ID.
 */
export function message(type, content, target) {
  const element = document.querySelector(target);
  element.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
        <div class="w-75">${content}</div>
        <button type="button" class="btn-close m-auto p-3" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

  element.append(wrapper);
}
