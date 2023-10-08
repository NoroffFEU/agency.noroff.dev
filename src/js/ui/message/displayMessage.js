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