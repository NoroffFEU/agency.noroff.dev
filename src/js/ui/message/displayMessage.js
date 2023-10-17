/**
 * Cretes a message element with a type and message and inserts it into a container.
 * 
 * @param {string} type - 
 * @param {string} message - The message to display
 * @param {HTMLElement} target - The target container where the message will be displayed.
 * @returns {void}
 */

export function displayMessage(type, message, target) {
   let container = target;
 
   if (typeof target === "string") {
     container = document.querySelector(target);
   }
 
   const displayError = message.replace(/\n/g, "<br>");
 
   container.innerHTML = `<div class="alert alert-${type}">
                         ${displayError}
                         </div>`;
 }